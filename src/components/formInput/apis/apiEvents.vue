<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'submit',
    description: 'Submitting the form',
    parameters: '',
  },
]
</script>
