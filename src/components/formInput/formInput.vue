<template>
    <s-form-input auto-complete="on" @submit="onSubmit">
        <div class="mt-4">
            <label>Username :</label>
            <s-input v-model="input" type="text" placeholder="Input Your Name" />
        </div>
        <div class="mt-4">
            <label>Email Address :</label>
            <s-input v-model="email" type="email" placeholder="Input Your Email" />
        </div>
        <div class="mt-4">
            <label>Password :</label>
            <s-input v-model="password" type="password" placeholder="Input Your Password" />
        </div>
        <div class="mt-4">
            <label>Confirmation Password :</label>
            <s-input v-model="confirmPassword" type="password" placeholder="Input Your Password" />
        </div>
        <div>
            <s-checkbox v-model="accept" class="mt-3">
                <p class="mt-[-18px]">Accept Terms and Conditions</p>
            </s-checkbox>
        </div>
         <div v-if="errorMessage" class="mt-2 text-red-500">{{ errorMessage }}</div>
        <div>
            <s-button class="mt-3 mb-3" type="submit">SUBMIT</s-button>
        </div>
    </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const accept = ref(false);
const errorMessage = ref('');

const registerValidateFunc = (func) => {
    return func();
}

const validate = () => {
    if (!input.value || !email.value || !password.value || !confirmPassword.value) {
        errorMessage.value = 'You must fill in all fields!';
        return false;
    }
    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'The passwords do not match!';
        return false;
    }
    if (!accept.value) {
        errorMessage.value = 'You must accept the terms and conditions.';
        return false;
    }
    errorMessage.value = '';
    return true;
}

const onSubmit = () => {
    if (registerValidateFunc(validate)) {
        
    }
}
</script>
