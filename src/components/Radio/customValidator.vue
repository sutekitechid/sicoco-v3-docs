<template>
  <s-form-input @submit="onSubmit">
    <s-radio-group 
      :custom-validators="{
        'cold': (value) => {
          return !(temperature === 'cold' && drink !== 'tea');
        }
      }"
    >
      <p class="mt-3 text-xl">Choose what you want to drink?</p>
      <div>
        <div>
          <s-radio value="tea" type="primary" v-model="drink">
            <p class="mt-[-18px] text-gray-300">Tea</p>
          </s-radio>
        </div>
        <div>
          <s-radio value="coffee" type="primary" v-model="drink">
            <p class="mt-[-18px] text-gray-300">Coffee</p>
          </s-radio>
        </div>
      </div>

      <p class="mt-3 text-xl">Do you want a cold or hot drink?</p>
      <div>
        <div>
          <s-radio value="hot" type="primary" v-model="temperature">
            <p class="mt-[-18px] text-gray-300">Hot</p>
          </s-radio>
        </div>
        <div>
          <s-radio value="cold" type="primary" v-model="temperature">
            <p class="mt-[-18px] text-gray-300">Cold</p>
          </s-radio>
        </div>
      </div>

      <template #errors="{ validation }">
        <div v-if="validation['cold']" class="text-danger-100">
          Sorry, but the cold coffee menu is not available!
        </div>
      </template>
      <s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
    </s-radio-group>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const drink = ref('');
const temperature = ref('');  // Convert to string to store a single value.

const onSubmit = () => {
  console.log('submit');
}
</script>
