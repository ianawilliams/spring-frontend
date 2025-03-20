<template>
  <div class="user-item">
    {{ user.name }} - {{  $t("points", { value: user.points }) }}

    <BtnIcon icon="plus" />
    <BtnIcon icon="minus" />
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/types/user';

defineProps<{ user: User }>()

</script>
<style lang="scss" scoped>
.user-item {
  padding: $padding;
  margin: $padding 0;
  border: 1px solid $border-color;
}
</style>
