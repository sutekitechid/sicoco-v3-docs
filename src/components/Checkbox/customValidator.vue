<template>
  <s-form-input @submit="onSubmit">
    <s-checkbox-group 
      :custom-validators="{
        'cash': (value) => {
          return !(payment === 'cash' && delivery !== 'cod');
        }
      }"
    >
      <p class="mt-3 text-xl">Select a delivery method:</p>
      <div>
        <div>
          <s-checkbox value="regular" type="primary" v-model="delivery">
            <p class="mt-[-18px]">Regular</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox value="instant" type="primary" v-model="delivery">
            <p class="mt-[-18px]">Instant</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox value="cod" type="primary" v-model="delivery">
            <p class="mt-[-18px]">COD</p>
          </s-checkbox>
        </div>
      </div>

      <p class="mt-3 text-xl">Select a payment method:</p>
      <div>
        <div>
          <s-checkbox value="qris" type="primary" v-model="payment">
            <p class="mt-[-18px]">QRIS</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox value="bank" type="primary" v-model="payment">
            <p class="mt-[-18px]">Bank Transfer</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox value="cash" type="primary" v-model="payment">
            <p class="mt-[-18px]">Cash</p>
          </s-checkbox>
        </div>
      </div>

      <template #errors="{ validation }">
        <div v-if="validation['cash']" class="text-danger-100">
          Cash can only be used for COD delivery.
        </div>
      </template>
      <s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
    </s-checkbox-group>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const delivery = ref('');
const payment = ref('');  // Convert to string to store a single value.

const onSubmit = () => {
  console.log('submit');
}
</script>
