<template>
  <div
    class="app-wrapper"
    :class="{
      'app-wrapper--sidebar' : sideBarOpen,
      'app-wrapper--dialog' : dialogOpen,
    }">
    <HeaderMain>
      <slot name="header"></slot>
      <template #right>
        <div class="header-right">
          <BtnIcon 
            :icon="sideBarTrigger == 'settings' ? 'cog-outline' : 'cog'"
            @click.stop="toggleSettings"
          />
          
          <BtnIcon 
            :icon="sideBarOpen ? 'arrow-right' : 'arrow-left'"
            @click.stop="toggleSidebar"
          />
        </div>
      </template>
    </HeaderMain>
    <div class="flex-column">
      <main class="flex-column">
        <ScrollWrapper>
          <slot></slot>
        </ScrollWrapper>
      </main>
      <aside class="sidebar flex-column">
        <ScrollWrapper>
          <SettingsPanel
            v-if="sideBarTrigger == 'settings'"
          >
            <slot name="settings"></slot>
          </SettingsPanel>
          <slot v-else name="sidebar"></slot>
        </ScrollWrapper>
      </aside>
    </div>
    <DialogPopup
      v-model="dialogOpen"
      @close-dialog="emit('close-dialog')"
    >
      <slot name="dialog"></slot>
    </DialogPopup>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import HeaderMain from '@/components/ui/base/HeaderMain.vue';
import DialogPopup from '@/components/ui/DialogPopup.vue';
import ScrollWrapper from '@/components/ui/layout/ScrollWrapper.vue';
import SettingsPanel from '@/components/ui/SettingsPanel.vue';

const sideBarTrigger = defineModel<string>("side-index");
const dialogOpen = defineModel<boolean>("dialog");

const emit = defineEmits(["close-dialog"])

const sideBarOpen = computed<boolean>(() => {
  if (sideBarTrigger.value && sideBarTrigger.value.length) {
    return sideBarTrigger.value != "close";
  } else {
    return false;
  }
})

const toggleSettings = () => {
  if (sideBarTrigger.value && sideBarTrigger.value == 'settings') {
    sideBarTrigger.value = "close";
  } else {
    sideBarTrigger.value = "settings";
  }
}

const toggleSidebar = () => {
  if (sideBarTrigger.value && sideBarTrigger.value.length && sideBarTrigger.value != "close") {
    sideBarTrigger.value = "close";
  } else {
    sideBarTrigger.value = "open";
  }
}

</script>
<style lang="scss" scoped>
$sidebar-width: 300px;
$sidebar-bp: 800px;

.app-wrapper {
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;

  &.app-wrapper--dialog {
    overflow: hidden;
  }
  
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
    display: flex;
    width: 0;
    background: $background-main;
    border-left: 1px solid $border-color;

    @include smaller-than( $sidebar-bp ) {
      position: fixed;
      top: 40px;
      right: 0;
      height: calc(100% - 40px);
    }
    /*
    position: fixed;
    top: 40px;
    right: 0;
    height: calc(100% - 40px);
    width: 0;
    z-index: 99;
    background: $background-main;
    border-left: 1px solid $border-color;
    */
  }
}

.header-right {
  &:deep(.btn-icon) {
    margin-left: calc($padding/2);
  }
}
</style>
