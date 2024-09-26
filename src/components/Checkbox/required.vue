<template>
  <s-form-input @submit="onSubmit">
    <s-checkbox
        class="mt-3"
        v-model="input"
        value="Primary"
        required
      />
    <div>
       <s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
    </div>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')

const onSubmit = () => {
  console.log('submit')
}
</script>