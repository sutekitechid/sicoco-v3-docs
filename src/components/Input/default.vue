<template>
  <s-input
    v-model="input"
    type="text"
    data-cy="input-text"
    placeholder="John Doe"
  />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>