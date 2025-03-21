<template>
    <div class="user-create">
        <div>
            <TextInput
                v-model="user.name"
                label="Name"
                :invalid="v$.name.$error"
                :errors="v$.name.$errors"
                @blur="v$.name.$touch"
            />
            <NumberInput
                v-model="user.age"
                label="Age"
                :invalid="v$.age.$error"
                :errors="v$.age.$errors"
                @blur="v$.age.$touch"
            />
            <TextInput
                v-model="user.address"
                label="Address"
                :invalid="v$.address.$error"
                :errors="v$.address.$errors"
                @blur="v$.address.$touch"
            />
        </div>
        <div class="user-create__btns">
            <button
                class="btn btn--wide btn--primary"
                :disabled="v$.$invalid"
            >
                Create
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import TextInput from '@/components/ui/inputs/TextInput.vue';
import NumberInput from '@/components/ui/inputs/NumberInput.vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
const blankUser = {
    name: null,
    age: null,
    address: null,
}

const rules = {
    name: { required },
    age: { required },
    address: { required },
}

const user = reactive(blankUser);

const v$ = useVuelidate(rules, user)

</script>
<style lang="scss" scoped>
.user-create {
    padding: $padding;

    .user-create__btns {
        margin-top: 20px;
    }
}
</style>