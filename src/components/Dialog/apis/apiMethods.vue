<template>
  <ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
  {
    name: 'show',
    description: 'Do a modal show',
    parameters: '',
    return: '',
  },
  {
    name: 'cancle',
    description: 'Do hide modal',
    parameters: '',
    return: '',
  },
]
</script>
