<template>
  <ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
  {
    name: 'show',
    description: 'Displays a confirmation dialog',
    parameters: '({ onConfirm: Function })',
    return: '',
  },
  {
    name: 'hide',
    description: 'Hides the confirmation dialog',
    parameters: '',
    return: '',
  },
]
</script>