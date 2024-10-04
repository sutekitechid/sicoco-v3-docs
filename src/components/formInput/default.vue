<template>
    <s-form-input auto-complete="on"  @submit="onSubmit" label="name :">
        <s-button type="">Submit</s-button>
    </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('');

const onSubmit = () => {
    console.log('submit');
}
</script>