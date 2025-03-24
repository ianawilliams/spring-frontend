<template>
    <div class="settings-panel">
        <h1>{{ $t("settings.title") }}</h1>
        <div>
            <LanguageSwitcher />
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import LanguageSwitcher from '@/components/language/LanguageSwitcher.vue';
</script>
<style lang="scss" scoped>
.settings-panel {
    padding: $padding;
}
</style>