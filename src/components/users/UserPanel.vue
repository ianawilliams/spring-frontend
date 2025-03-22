<template>
    <div class="user-panel">
      <template v-if="loading">
        Loading...
      </template>
      <template v-else-if="user">
        <h1>{{ user.name }}</h1>
        <div>Age: {{ user.age }}</div>
        <div>
          {{ user.points }} {{ user.points == 1 ? "point" : "points" }}
        </div>
        <div>
          {{ user.address.first }}
        </div>
      </template>
      <template v-else>
        User not found
      </template>
    </div>
</template>
<script lang="ts" setup>
import { toRef, computed } from 'vue';
import type { User } from '@/types/user';
import { useQuery } from '@vue/apollo-composable'
import { getUser } from '@/graphql/queries';

const props = defineProps<{
  id: string;
}>()

const userId = toRef(props, "id");

const { result, loading } = useQuery(getUser, {
  id: userId
});

const user = computed<User | null>(() => {
  if (result?.value?.getUser) {
    return result.value.getUser;
  } else {
    return null;
  }
})

</script>
<style lang="scss" scoped>
.user-panel {
  padding: $padding;
}
</style>