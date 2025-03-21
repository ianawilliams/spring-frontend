<template>
    <FormInput
        :id="id"
        :disabled="disabled"
        :invalid="invalid"
        :label="label"
        :errors="errors"
    >    
        <input
            v-model="val"
            :id="id"
            type="number"
            @blur="emit('blur')"
        />
    </FormInput>
</template>
<script lang="ts" setup>
import { useId } from 'vue';
import FormInput from './FormInput.vue';
import type { ErrorObject } from '@vuelidate/core'

withDefaults(defineProps<{
    disabled?: boolean,
    invalid?: boolean,
    label?: string,
    errors?: ErrorObject[],
}>(), {
  disabled: false,
  invalid: false,
  errors: () => [],
});

const uId = useId();
const id = `input-${uId}`;
const val = defineModel<number | null>();

const emit = defineEmits(["focus", "blur"])
</script>