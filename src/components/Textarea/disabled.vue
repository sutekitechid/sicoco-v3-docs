<template>
    <s-textarea 
        v-model="input"
        placeholder="John Doe"
        disabled
    />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>