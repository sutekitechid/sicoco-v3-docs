<template>
  <s-button @click="showLoading">Click Loading</s-button>
</template>

<script setup>
import { inject } from 'vue';

const loading = inject('loading');

const showLoading = () => {
  loading.open();

  setTimeout(() => {
    loading.close();
  }, 3000);
};
</script>