<template>
  <div class="app-wrapper" :class="{'app-wrapper--sidebar' : sideBarOpen}">
    <HeaderMain>
      <slot name="header"></slot>
      <button @click.stop="sideBarOpen = !sideBarOpen">Open</button>
    </HeaderMain>
    <main>
      <slot></slot>
    </main>
    <aside class="sidebar">
      Siebar Conetent here
    </aside>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import HeaderMain from '@/components/ui/base/HeaderMain.vue';

const sideBarOpen = ref(true);
</script>
<style lang="scss" scoped>
$sidebar-width: 300px;
$sidebar-bp: 800px;

.app-wrapper {
  &.app-wrapper--sidebar {
    main {
      width: 100%;
      @include larger-than( $sidebar-bp ) {
        width: calc(100% - $sidebar-width);
      }
    }
    .sidebar {
      width: 100%;
      @include larger-than( $sidebar-bp ) {
        width: $sidebar-width;
      }
    }
  }
  main,
  .sidebar {
    transition:width 0.15s ease-out;
  }

  main {
    padding: $padding;
    width: 100%;
  }
  .sidebar {
    position: fixed;
    top: 40px;
    right: 0;
    height: calc(100% - 40px);
    width: 0;
    z-index: 99;
    background: $background-main;
    border-left: 1px solid $border-color;
  }
}
</style>
