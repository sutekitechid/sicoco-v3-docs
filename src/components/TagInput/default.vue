<template>
  <div class="mt-5">
    <STaginput
      v-model="input"
      autocomplete
      placeholder="Input Tag"
      @keypress.enter.space="addTag"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input = ref(['Apple', 'Banana']);

const addTag = (event) => {
  const newTag = event.target.value.trim();
  if (newTag && !input.value.includes(newTag)) {
    input.value.push(newTag);
    event.target.value = '';
  }
};
</script>