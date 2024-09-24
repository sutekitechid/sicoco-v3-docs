<template>
    <s-textarea 
        v-model="input"
        placeholder="John Doe"
        maxlength=30
    />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>