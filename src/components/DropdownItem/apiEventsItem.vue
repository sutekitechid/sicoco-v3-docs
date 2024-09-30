<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'click',
    description: 'Triggers when the user clicks an option',
    parameters: 'event: $event',
  },
]
</script>