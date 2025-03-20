<template>
  <button :disabled="disabled" class="btn-icon">
    <i :class="`mdi mdi-${icon}`" />
  </button>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
  icon: string;
  disabled?: boolean;
}>(), {
  disabled: false,
});
</script>
<style lang="scss" scoped>
.btn-icon {
  background: none;
  padding: 0;
  height: 24px;
  width: 24px;
  line-height: 1;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;

  color: $primary;
  border: 1px solid $primary;
}
</style>
