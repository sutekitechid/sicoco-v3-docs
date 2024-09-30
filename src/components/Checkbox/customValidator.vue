<template>
  <s-form-input @submit="onSubmit">
    <s-checkbox
      v-model="checkbox1"
      value="checkbox-satu"
      :customValidators="{
        'customValidators': (value) => {
          return value
        }
      }"
    >
      Checkbox 1 (customValidators)
    </s-checkbox>
    <s-checkbox
      v-model="checkbox2"
      value="checkbox-dua"
    >
      Checkbox 2
    </s-checkbox>
    <template #errors="{ validation }">
      <div v-if="!validation['customValidators']" class="text-danger-100">
        Custom validator error, please check "Checkbox 1"
      </div>
    </template>
    <s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const checkbox1 = ref(false)
const checkbox2 = ref(false)

const onSubmit = () => {
  if (!checkbox1.value) {
    
  }
}
</script>