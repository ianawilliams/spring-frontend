<template>
  <header>
    <div class="header__main">
      <slot></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  min-height: 40px;
  padding: 0 $padding;
  border-bottom: 2px solid $primary;
  z-index: 99;
  background: $background-main;

  .header__main {
    display: flex;
    flex-grow: 1;
  }
}
</style>
