<template>
  <BaseUi>
    <template #header>
      Filters here
    </template>
    <template v-if="loading">
      Loading...
    </template>
    <template v-else-if="users.length">
      <UserItem
        v-for="(user, index) in users"
        :key="index"
        :user="user"
      />
    </template>
    <template v-else>
      {{ $t("empty") }}
    </template>
  </BaseUi>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/types/user';
import UserItem from '@/components/users/UserItem.vue';
import BaseUi from '@/layouts/BaseUi.vue';

const loading = ref(false);


const users: User[] = [
  {
    id: 1,
    name: "Emma",
    age: 24,
    address: {
      address: "Somewhere",
    },
    points: 0,
  },
  {
    id: 2,
    name: "Noah",
    age: 24,
    address: {
      address: "Somewhere",
    },
    points: 0,
  },
  {
    id: 3,
    name: "James",
    age: 24,
    address: {
      address: "Somewhere",
    },
    points: 0,
  },
  {
    id: 4,
    name: "William",
    age: 24,
    address: {
      address: "Somewhere",
    },
    points: 0,
  },
  {
    id: 5,
    name: "Olivia",
    age: 24,
    address: {
      address: "Somewhere",
    },
    points: 0,
  },
];

</script>
