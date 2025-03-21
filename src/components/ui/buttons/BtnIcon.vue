<template>
  <button
    :disabled="disabled"
    class="btn-icon"
    :class="{'btn-icon--filled': filled}"
  >
    <i :class="`mdi mdi-${icon}`" />
  </button>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
  icon: string;
  disabled?: boolean;
  filled?: boolean;
}>(), {
  disabled: false,
  filled: false,
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

  &.btn-icon--filled {
    background: $primary;
    color: $background-main;
  }

  &.btn-icon--no-border {
    border: none;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.4;
  }
}
</style>
