<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'v-model',
    description: 'Handle page change',
    parameters: '',
  },
  {
    name: 'v-model:per-page',
    description: 'Handle per page change',
    parameters: '',
  },
  {
    name: 'v-model:show-all',
    description: 'Handle per page change but only show all',
    parameters: '',
  },
]
</script>