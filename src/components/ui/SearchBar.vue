<template>
    <div
        class="search-bar"
        :class="{'search-bar--focused': focused }"
        @click.stop="toggleFocus"
    >
        <i class="mdi mdi-magnify" />
        <input
            v-model="searchTerm"
            ref="searchInput"
            placeholder="Search..."
            @focus="focused = true"
            @blur="focused = false"
        />
        <BtnIcon
            class="btn-icon--no-border"
            :disabled="!(searchTerm && searchTerm.length)"
            icon="close"
            @click.stop="searchTerm = null"
        />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const searchTerm = defineModel<string | null>();
const focused = ref(false);
const searchInput = ref<HTMLInputElement | null>(null);

const toggleFocus = () => {
    if (!focused.value &&  searchInput.value) {
        searchInput.value.focus();
    }
}

</script>
<style lang="scss" scoped>
.search-bar {
    display: flex;
    align-items: center;
    height: 28px;
    border: 1px solid $border-color;
    padding-left: 2px;
    border-radius: 4px;

    i {
        color: $border-color;
    }

    &.search-bar--focused {
        border-color: $primary;

        i {
            color: $primary;
        }
    }

    &:deep(.btn-icon) {
        &:disabled,
        &[disabled] {
            visibility: hidden;
        }
    }

    input {
        padding: 0 5px;
        height: 26px;
        border: none;
        outline: none;
        color: $primary;
    }
}
</style>