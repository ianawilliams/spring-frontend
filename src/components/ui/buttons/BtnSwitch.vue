<template>
    <div class="btn-switch">
        <BtnIcon
            :filled="model"
            :icon="activeIcon"
            @click.stop="model = true" 
        />
        <BtnIcon 
            :filled="!model"
            :icon="deactiveIcon"
            @click.stop="model = false"
        />
    </div>
</template>
<script lang="ts" setup>
const model = defineModel<boolean>();
defineProps<{
    activeIcon: string,
    deactiveIcon: string,
}>()
</script>
<style lang="scss" scoped>
.btn-switch {
    box-sizing: border-box;
    height: 26px;
    border-radius: 12px;
    border: 1px solid $primary;
    display: flex;

    &:deep(.btn-icon) {
        border: none;

    }
}
</style>