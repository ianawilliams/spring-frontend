<template>
    <div v-if="model" class="dialog-background" @click.stop="closeDialog">
        <div class="dialog-window" @click.stop>
            <div class="dialog-header">
                <BtnIcon icon="close" @click.stop="closeDialog" />
            </div>
            <div class="dialog-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const model = defineModel<boolean>();

const emit = defineEmits(["close-dialog"])

const closeDialog = () => {
    model.value = false;
    emit("close-dialog")
}

</script>
<style lang="scss" scoped>
.dialog-background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.34);
    z-index: 9999;
    cursor: pointer;

    .dialog-window {
        cursor: default;
        border-radius: 4px;
        width: calc(100% - 40px);
        max-width: 400px;
        background: $background-main;
        border: 1px solid #000;
        -webkit-box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.25); 
        box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.25);

        .dialog-header {
            padding: 5px;
            display: flex;
            justify-content: flex-end;
        }

        .dialog-content {
            padding: $padding;
        }
    }
}
</style>
