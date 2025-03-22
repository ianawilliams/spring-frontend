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
                @click.stop="newUser"
            >
                Create
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import TextInput from '@/components/ui/inputs/TextInput.vue';
import NumberInput from '@/components/ui/inputs/NumberInput.vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { createUser } from '@/graphql/mutations';
import { useMutation } from '@vue/apollo-composable'

const { mutate: addUser } = useMutation(createUser);

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
const loading = ref(false);

const v$ = useVuelidate(rules, user)

const newUser = async () => {
    loading.value = true;
    const res = await addUser(user);
    console.log(res);
    loading.value = false;
}

</script>
<style lang="scss" scoped>
.user-create {
    padding: $padding;

    .user-create__btns {
        margin-top: 20px;
    }

    &:deep(.form-input) {
        margin-bottom: 10px;
    }
}
</style>