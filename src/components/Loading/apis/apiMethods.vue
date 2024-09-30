<template>
  <ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
  {
    name: 'open()',
    description: 'To display a loading indicator',
    parameters: '',
    return: '',
  },
  {
    name: 'close()',
    description: 'To remove the loading indicator',
    parameters: '',
    return: '',
  },
]
</script>
