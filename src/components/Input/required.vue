<template>
  <s-form-input @submit="onSubmit">
    <s-input
      v-model="input"
      type="text"
      data-cy="input-required"
      placeholder="John Doe"
      required
    />
    <s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')

const onSubmit = () => {
  console.log('submit')
}
</script>