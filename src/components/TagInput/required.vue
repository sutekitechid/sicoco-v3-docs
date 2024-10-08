<template>
    <s-form-input @submit="onSubmit">
      <s-taginput class="mt-4" v-model="input" autocomplete required @keypress.enter.space="addTag" placeholder="Input Tag">
        <template #required>
          <p class="text-red-90">Tag input is required!!</p>
        </template>
      </s-taginput>
      <s-button type="submit">SUBMIT</s-button>
    </s-form-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref([])

const onSubmit = () => {
  console.log('submit')
}

const addTag = (event) => {
  const newTag = event.target.value.trim();
  if (newTag && !input.value.includes(newTag)) {
    input.value.push(newTag);
    event.target.value = '';
  }
};
</script>