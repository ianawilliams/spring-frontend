<template>
    <div
        class="form-input"
        :class="{'form-input--invalid': invalid}"
    >
        <label
            v-if="label"
            :for="`input-${id}`"
        >
            {{ label }}
        </label>
        <slot></slot>
        <div
            v-if="errorOutput.length"
            class="form-input__errors"
        >
            {{ errorOutput }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import type { ErrorObject } from '@vuelidate/core'

const props = withDefaults(defineProps<{
    id: string,
    disabled?: boolean,
    invalid?: boolean,
    label?: string,
    errors?: ErrorObject[],
}>(), {
  disabled: false,
  invalid: false,
  errors: () => [],
});

const messages = computed<string[]>(() => {
  return props.errors.map((item) => item.$message as string);
});

const errorOutput = computed<string>(() => {
    if (messages.value.length) {
        if (messages.value.length == 1) {
            return messages.value[0];
        } else {
            return messages.value.join(", ")
        }
    } else {
        return "";
    }
})

</script>
<style lang="scss" scoped>
.form-input {
    display: flex;
    flex-direction: column;

    &.form-input--invalid {
        label {
            color: $alert-red;
        }
        &:deep(input) {
            &,
            &:focus {
                border-color: $alert-red;
            }
        }
    }
    
    label,
    &:deep(input) {
        display: flex;
    }

    &:deep(input) {
        padding: 4px;
        border: 1px solid $border-color;
        border-radius: 4px;
        outline: none;

        &:focus {
            border-color: $primary;
        }
    }

    .form-input__errors {
        color: $alert-red;
        font-size: 0.8rem;
    }
}
</style>