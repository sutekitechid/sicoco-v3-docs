<template>
  <ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
  {
    name: 'registerValidateFunc',
    description: 'Register validate function from each child component such as InputText, InputSelect, dropdown, etc',
    parameters: 'function',
    return: '',
  },
  {
    name: 'removeValidateFunc',
    description: 'Remove validaton function that was added',
    parameters: 'id',
    return: '',
  },
  {
    name: 'validate',
    description: 'Validating the form before submitting',
    parameters: '',
    return: '',
    },
  {
    name: 'reset',
    description: 'Reset validation',
    parameters: '',
    return: '',
  },
]
</script>
