<template>
  <ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
  {
    name: 'focus',
    description: 'The input is focused',
    parameters: '',
    return: '',
  },
  {
    name: 'addEventListener',
    description: 'Add an event listener to the input',
    parameters: 'function',
    return: '',
  },
  {
    name: 'removeEventListener',
    description: 'Remove an event listener from the input',
    parameters: 'function',
    return: '',
  },
]
</script>
