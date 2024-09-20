<template>
  <s-form-input @submit="onSubmit">
    <s-textarea
      v-model="input"
      placeholder="Please type 'Sicoco-v3'"
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
    </s-textarea>
    <s-button type="submit">SUBMIT</s-button>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>