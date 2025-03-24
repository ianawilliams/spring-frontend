<template>
    <div class="sort-order">
        {{ $t("sort.label") }}
        <div class="sort-order__btns">
            <button
                class="btn btn--sm"
                :class="{'btn--primary' : !model}"
                @click.stop="model = false"
            >
                <i class="mdi mdi-sort-ascending" />
                {{ $t("sort.points") }}
            </button>
            <button 
                class="btn btn--sm"
                :class="{'btn--primary' : model}"
                @click.stop="model = true"
            >
                <i class="mdi mdi-order-alphabetical-ascending" />
                {{ $t("sort.names") }}
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
const model = defineModel<boolean>();

</script>
<style lang="scss" scoped>
.sort-order {
    display: flex;
    align-items: center;

    .sort-order__btns {
        margin: 0 5px;
    }
}
</style>