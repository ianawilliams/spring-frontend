<template>
  <BaseUi>
    <button @click="alphOrder = !alphOrder">
      {{ alphOrder ? "Points" : "Alphabetical" }} Order
    </button>
    <template #header>
      Filters here
    </template>
    <template v-if="loading">
      Loading...
    </template>
    <template v-else-if="users && users.length">
      <UserDisplay
        v-for="(user, index) in users"
        :key="index"
        :user="user"
      />
    </template>
    <div v-else class="text-center">
      {{ $t("empty") }}
    </div>
  </BaseUi>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import UserDisplay from '@/components/users/UserItem.vue';
import BaseUi from '@/layouts/BaseUi.vue';
import { useQuery } from '@vue/apollo-composable'
import { getUsers } from '@/graphql/queries';
import type { UserItem } from '@/types/user';

const alphOrder = ref(false);

const users = ref<UserItem[]>([]);
const { result, loading } = useQuery(getUsers, {
  alph: alphOrder
});


watch(result, (value) => {
  if (value.users) {
    users.value = value.users;
  }
})

</script>
