<template>
    <s-taginput
      class="mt-4"
      v-model="input"
      autocomplete
      @keypress.enter="addTag"
      placeholder="Please input tag 'pizza' only"
      :custom-validators="{
        'pizza': () => {
          return input.value.every(tag => tag === 'pizza');
        }
      }"
    >
      <template #errors="{ validation }">
        <div v-if="validation['pizza']" class="text-danger-90">
          Custom validation error, please type "pizza"
        </div>
      </template>
    </s-taginput>
    <div v-if="validation" class="text-danger-90 mt-2">{{ validation }}</div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref([]);
const validation = ref('');

const addTag = (event) => {
  const newTag = event.target.value.trim();
  if (newTag === 'pizza' && !input.value.includes(newTag)) {
    input.value.push(newTag);
    validation.value = '';
    event.target.value = '';
  } else if (newTag !== 'pizza') {
    validation.value = 'Custom validation error, please type "pizza"';
    event.target.value = '';
  }
};
</script>