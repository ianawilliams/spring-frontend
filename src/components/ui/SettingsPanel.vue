<template>
    <div class="settings-panel">
       <h1>{{ $t("settings.title") }}</h1>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.settings-panel {
    padding: $padding;
}
</style>