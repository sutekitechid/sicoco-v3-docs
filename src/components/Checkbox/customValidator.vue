<template>
  <s-form-input @submit="onSubmit">
    <s-checkbox-group 
      :custom-validators="{
        'cash': (value) => {
          return !(pembayaran === 'cash' && pengiriman !== 'cod');
        }
      }"
    >
      <p class="mt-3 text-xl">Pilih Metode pengiriman:</p>
      <div>
        <div>
          <s-checkbox value="regular" type="primary" v-model="pengiriman">
            <p class="mt-[-18px]">Regular</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox value="instant" type="primary" v-model="pengiriman">
            <p class="mt-[-18px]">Instant</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox value="cod" type="primary" v-model="pengiriman">
            <p class="mt-[-18px]">COD</p>
          </s-checkbox>
        </div>
      </div>

      <p class="mt-3 text-xl">Pilih Metode pembayaran:</p>
      <div>
        <div>
          <s-checkbox value="qris" type="primary" v-model="pembayaran">
            <p class="mt-[-18px]">QRIS</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox value="bank" type="primary" v-model="pembayaran">
            <p class="mt-[-18px]">Bank Transfer</p>
          </s-checkbox>
        </div>
        <div>
          <s-checkbox 
            value="cash" 
            type="primary" 
            v-model="pembayaran"
          >
            <p class="mt-[-18px]">Cash</p>
          </s-checkbox>
        </div>
      </div>

      <template #errors="{ validation }">
        <div v-if="validation['cash']" class="text-danger-100">
          Cash hanya bisa dilakukan untuk pengiriman COD.
        </div>
      </template>
      <s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
    </s-checkbox-group>
  </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const pengiriman = ref('');
const pembayaran = ref('');  // Mengubah ke string untuk menyimpan satu nilai

const onSubmit = () => {
  console.log('submit');
}
</script>
