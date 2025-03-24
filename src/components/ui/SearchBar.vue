<template>
    <div
        class="search-bar"
        :class="{
            'search-bar--focused': focused,
            'search-bar--btn': searchTerm && searchTerm.length
        }"
    >
        <label :for="id">
            <i class="mdi mdi-magnify" />
        </label>
        <input
            v-model="searchTerm"
            :id="id"
            ref="searchInput"
            :placeholder="$t('search.placeholder')"
            @focus="focused = true"
            @blur="focused = false"
        />
        <BtnIcon
            v-if="searchTerm && searchTerm.length"
            class="btn-icon--no-border"
            icon="close"
            @click.stop="searchTerm = null"
        />
    </div>
</template>
<script lang="ts" setup>
import { ref, useId } from 'vue';
const searchTerm = defineModel<string | null>();
const focused = ref(false);
const searchInput = ref<HTMLInputElement | null>(null);

const id = `search-${useId()}`;

</script>
<style lang="scss" scoped>
.search-bar {
    display: flex;
    align-items: center;
    height: 28px;
    border-radius: 14px;
    border: 1px solid $border-color;
    padding-left: 2px;
    overflow: hidden;

    &.search-bar--btn {
        input {
            padding-right: 5px;
        }
    }

    i {
        color: $border-color;
    }

    &.search-bar--focused {
        border-color: $primary;

        i {
            color: $primary;
        }
    }
    /*
        Input has padding of 5px horizontally and
        24px if the clear button isn't available
    */
    input {
        padding-left: 5px;
        padding-right: calc(5px + 24px);
        height: 26px;
        border: none;
        outline: none;
        color: $primary;
    }
}
</style>