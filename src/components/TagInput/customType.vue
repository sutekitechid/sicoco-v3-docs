<template>
  <div class="mt-5">
    <STaginput v-model="input" autocomplete placeholder="Input Tag" @keypress.enter.space="addTag" :custom-type="getCustomType" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const getCustomType = () => {
  return 'success'; //You can replace it with other color logic by taking the badge type.   
};

const input = ref(['Apple', 'Banana']);

const addTag = (event) => {
  const newTag = event.target.value.trim();
  if (newTag && !input.value.includes(newTag)) {
    input.value.push(newTag);
    event.target.value = '';
  }
};
</script>