<template>
  <div class="user-item">
    {{ user.name }} - {{  $t("points", { value: user.points }) }}

    <BtnIcon icon="plus" @click.stop="increase" />
    <BtnIcon :disabled="user.points == 0" icon="minus" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { UserItem } from '@/types/user';
import { increasePoints } from '@/graphql/mutations';
import { useQuery } from '@vue/apollo-composable'
// import { provideApolloClient } from '@vue/apollo-composable'

const props = defineProps<{ user: UserItem }>()
const currId = ref(props.user.id);

const increase = async () => {
  const { result } = useQuery(increasePoints, {
    id: currId,
  })

  // const query = provideApolloClient(apolloClient)(() => useQuery(increasePoints, {
  //   id: props.user.id,
  // }))

  console.log("increase result: ");
  console.log(result);
}

</script>
<style lang="scss" scoped>
.user-item {
  padding: $padding;
  margin: $padding 0;
  border: 1px solid $border-color;
}
</style>
