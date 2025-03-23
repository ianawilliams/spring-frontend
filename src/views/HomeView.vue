<template>
  <BaseUi 
    v-model:sideIndex="sideBarTrigger"
    v-model:dialog="dialogOpen"
    @close-dialog="toggleDelete(null)"
  >
    <template #header>
      <div class="header-left">
        <div class="header-left__item">
          <BtnIcon icon="plus" @click.stop="openCreate" />
        </div>
        <div class="header-left__item">
          <BtnSwitch
            v-model="alphOrder"
            active-icon="order-alphabetical-ascending"
            deactive-icon="sort-ascending"
          />
        </div>
        <div class="header-left__item">    
          <SearchBar v-model="searchTerm" />
        </div>
      </div>
    </template>
    <div v-if="initialLoad" class="loader-wrapper">
      <div class="loader"></div>
    </div>
    <template v-else-if="users && users.length">
      <UserDisplay
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        @point-change="reloadList"
        @delete-user="toggleDelete(user)"
        @click.stop="toggleUser(user.id)"
      />
    </template>
    <div v-else class="text-center">
      {{ $t("empty") }}
    </div>

    <template #sidebar>
      <UserPanel 
        v-if="selectedId"
        :id="selectedId"
      />
      <UserCreate
        v-else
        @new-user="reloadList"
      />
    </template>

    <template #settings>
      <div class="settings-item">
        <BtnIcon
          :icon="autoRefresh.refresh ? 'checkbox-marked' : 'checkbox-blank-outline'"
          @click.stop="toggleRefresh"
        />
        <span class="settings-label">{{ $t("settings.autoRefresh") }}</span>
      </div>
      <div class="settings-item">
        {{ $t(autoRefresh.interval == 1 ? "settings.second" : "settings.seconds", {value: autoRefresh.interval}) }}
        <BtnIcon
          icon="minus"
          :disabled="autoRefresh.interval == 1"
          @click.stop="autoRefresh.interval--"
        />
        <BtnIcon
          icon="plus"
          @click.stop="autoRefresh.interval++"
        />
        
      </div>
    </template>
    <template #dialog>
      <template v-if="deleteUser">
        <div class="delete-dialog">
          <div>
            {{ $t('delete.msg', {value: deleteUser.name}) }}
          </div>
          <div class="delete-dialog__btns">
            <button
              class="btn"
              @click.stop="toggleDelete(null)"
            >
              {{ $t("delete.cancel") }}
            </button>
            <button
              class="btn btn--alert"
              @click.stop="confirmDelete"
            >
            {{ $t("delete.delete") }}
            </button>
          </div>
        </div>
      </template>
    </template>
  </BaseUi>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue';
import { useLazyQuery } from '@vue/apollo-composable';
import { useMutation } from '@vue/apollo-composable';
import { getUsers } from '@/graphql/queries';
import { removeUser } from '@/graphql/mutations';
import type { UserItem } from '@/types/user';
import UserDisplay from '@/components/users/UserItem.vue';
import BaseUi from '@/layouts/BaseUi.vue';
import UserPanel from '@/components/users/UserPanel.vue';
import BtnSwitch from '@/components/ui/buttons/BtnSwitch.vue';
import SearchBar from '@/components/ui/SearchBar.vue';
import UserCreate from '@/components/users/UserCreate.vue';

const sideBarTrigger = ref("close");
const alphOrder = ref(false);
const searchTerm = ref<string | null>(null);
const selectedId = ref<string | null>(null);

const users = ref<UserItem[]>([]);
const dialogOpen = ref(false);

const initialLoad = ref(true);
const deleteUser = ref<UserItem | null>(null);
const autoRefresh = reactive({
  refresh: true,
  interval: 3
})

const { mutate: trashUser } = useMutation(removeUser);
const { result, load, refetch } = useLazyQuery(getUsers,{
  alph: alphOrder,
  search: searchTerm
}, {fetchPolicy: 'no-cache',})

const reloadTimer = () => {
  if (autoRefresh.refresh) {
    refetch();
    timer = setTimeout(reloadTimer, autoRefresh.interval * 1000);
  }
}

let timer = setTimeout(reloadTimer, autoRefresh.interval * 1000);

const reloadList = () => {
  if (autoRefresh.refresh) {
    clearTimeout(timer);
    timer = setTimeout(reloadTimer, autoRefresh.interval * 1000);
  }
  refetch();
}

onMounted(async () => {
  await load();
  initialLoad.value = false;
})

const toggleRefresh = () => {
  autoRefresh.refresh = !autoRefresh.refresh;
}

const toggleUser = (id: string) => {
  selectedId.value = id;
  sideBarTrigger.value = `open-${id}`;
}

const toggleDelete = (user: UserItem | null) => {
  deleteUser.value = user;
  dialogOpen.value = user != null;
}

const openCreate = () => {
  selectedId.value = null;
  sideBarTrigger.value = "create";
}

const confirmDelete = async () => {
  if (deleteUser.value) {
    await trashUser({id: deleteUser.value.id})
    toggleDelete(null);
    reloadList();
  }

}


watch(result, (value) => {
  if (value?.getUsers) {
    users.value = value.getUsers;
  }
});

</script>
<style lang="scss" scoped>
.delete-dialog {
  text-align: center;

  .delete-dialog__btns {
    margin-top: 20px;

    button {
      margin: 0 5px;
    }
  }
}

.settings-item {
  margin: 10px 0;

  .settings-label {
    padding: 0 5px;
  }
}

.header-left {
  display: flex;
  align-items: center;

  .header-left__item {
    margin-right: $padding/2;
  }
}
</style>
