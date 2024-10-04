<template>
  <s-form-input @submit="onSubmit">
    <s-radio-group>
    <div>
        <s-radio class="mt-3" v-model="input" value="accept" required>
        <p class="mt-[-18px] text-gray-300">Click Here</p>
        <template #required>
          <p class="ml-[-93px] text-red-90">Radio Button must be clicked!!</p>
        </template>
        </s-radio>
    </div>
    <div>
       <s-button type="submit">SUBMIT</s-button>
    </div>
    </s-radio-group>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')

const onSubmit = () => {
  console.log('submit')
}
</script>