<template>
  <s-form-input @submit="onSubmit">
    <s-checkbox class="mt-3" type="primary" v-model="input" value="Primary" required>
      <p class="mt-[-19px]">Accept Terms and Conditions</p>
        <template #required>
          <p class="ml-[-210px] text-red-90">Checkbox must be checked.</p>
        </template>
    </s-checkbox>
    <div>
       <s-button type="submit">SUBMIT</s-button>
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