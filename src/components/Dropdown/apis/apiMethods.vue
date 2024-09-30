<template>
  <ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
  {
    name: 'selectOption',
    description: 'Select an option in the dropdown',
    parameters: 'value: String, Number, Object',
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
  {
    name: 'openDropdown',
    description: 'Open the dropdown',
    parameters: '',
    return: '',
  },
]
</script>