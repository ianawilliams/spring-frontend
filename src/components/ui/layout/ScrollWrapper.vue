<template>
    <!-- Put this component in .flex-column -->
    <div :class="`scroll-container ${props.class}`">
      <div class="scroll-wrapper">
        <slot></slot>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  const props = defineProps({
    class: {
      type: String,
      default: "",
    },
  });
  </script>
  <style lang="scss" scoped>
  .scroll-wrapper {
    flex: 1;
    min-height: 0;
    min-width: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  
  .scroll-container {
    display: flex;
    flex-grow: 1;
    min-height: 0;
    min-width: 0;
  }
  </style>
  