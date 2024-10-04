<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'v-model',
    description: 'Value radio button',
    parameters: '',
  },
]
</script>
