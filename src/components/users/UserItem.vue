<template>
  <div class="user-item">
    <div class="user-item__content">
      {{ user.name }}

      <BtnIcon 
        icon="plus" 
        @click.stop="increase"
      />
      <BtnIcon
        :disabled="user.points == 0"
        icon="minus"
        @click.stop="decrease"
      />
      {{ $t(user.points == 1 ? "point" : "points", {value: user.points}) }}
    </div>
    <div>
      <BtnIcon
        icon="close"
        @click.stop="emit('delete-user')"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { UserItem } from '@/types/user';
import { increasePoints, decreasePoints } from '@/graphql/mutations';
import { useMutation } from '@vue/apollo-composable'

const props = defineProps<{ user: UserItem }>()

const { mutate: addPoint } = useMutation(increasePoints)
const { mutate: minusPoint } = useMutation(decreasePoints)

const emit = defineEmits(["point-change", "delete-user"])

const increase = async () => {
  await addPoint({id: props.user.id});
  emit("point-change");
}

const decrease = async () => {
  await minusPoint({id: props.user.id});
  emit("point-change");
}

</script>
<style lang="scss" scoped>
.user-item {
  display: flex;
  padding: $padding;
  margin: $padding 0;
  border: 1px solid $border-color;

  .user-item__content {
    flex-grow: 1;
  }
}
</style>
