<template>
  <BaseUi 
    v-model:sideIndex="sideBarTrigger"
    v-model:dialog="dialogOpen"
    @close-dialog="toggleDelete(null)"
  >
    <template #header>
      <BtnSwitch
        v-model="alphOrder"
        active-icon="order-alphabetical-ascending"
        deactive-icon="sort-ascending"
      />
      <SearchBar v-model="searchTerm" />
      <BtnIcon icon="plus" @click.stop="openCreate" />
    </template>
    <div v-if="loading" class="loader-wrapper">
      <div class="loader"></div>
    </div>
    <template v-else-if="users && users.length">
      <UserDisplay
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        @point-change="pointsChanged"
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
      <UserCreate v-else />
    </template>
    <template #dialog>
      <template v-if="deleteUser">
        <div class="delete-dialog">
          <div>
            Do you want to delete {{ deleteUser.name }}?
          </div>
          <div class="delete-dialog__btns">
            <button
              class="btn"
              @click.stop="toggleDelete(null)"
            >
              Cancel
            </button>
            <button
              class="btn btn--alert"
              @click.stop=""
            >
              Delete
            </button>
          </div>
        </div>
      </template>
    </template>
  </BaseUi>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useLazyQuery } from '@vue/apollo-composable'
import { getUsers } from '@/graphql/queries';
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
const selectedId = ref<number | null>(null);

const users = ref<UserItem[]>([]);
const dialogOpen = ref(false);

const deleteUser = ref<UserItem | null>(null);


const { result, load, refetch, loading } = useLazyQuery(getUsers,{
  alph: alphOrder,
  search: searchTerm
}, {fetchPolicy: 'no-cache',})

const pointsChanged = () => {
  refetch();
}

onMounted(async () => {
  await load();
})

const toggleUser = (id: number) => {
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
</style>
