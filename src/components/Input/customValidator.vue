<template>
  <s-form-input @submit="onSubmit">
    <s-input
      v-model="input"
      data-cy="custom-validators"
      placeholder="Please type 'custom-validator'"
      :custom-validators="{
        'custom-validator': (value) => {
          return value === 'custom-validator'
        }
      }"
    >
      <template #errors="{ validation }">
        <div v-if="validation['custom-validator']" class="text-danger-100">
          Custom validator error, please type "custom-validator"
        </div>
      </template>
    </s-input>
    <s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>