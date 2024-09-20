<template>
  <s-form-input @submit="onSubmit">
    <s-textarea
      v-model="input"
      placeholder="John Doe"
      required
    />
    <s-button type="submit">SUBMIT</s-button>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')

const onSubmit = () => {
  console.log('submit')
}
</script>