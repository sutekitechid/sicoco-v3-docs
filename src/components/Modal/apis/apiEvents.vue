<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'close',
    description: 'Close the modal',
    parameters: '',
  },
  {
    name: 'cancle',
    description: 'Do a show on modal',
    parameters: '',
  },
]
</script>
