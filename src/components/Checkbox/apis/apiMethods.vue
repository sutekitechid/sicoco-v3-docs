<template>
  <ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
  {
    name: 'selectOption',
    description: 'Select an option from the dropdown',
    parameters: 'value : string, number, object',
    return: '',
    },
  {
    name: 'focus',
    description: 'Set focus',
    parameters: '',
    return: '',
    },
  {
    name: 'closeDropdown',
    description: 'Close the dropdown',
    parameters: '',
    return: '',
  },
]
</script>
