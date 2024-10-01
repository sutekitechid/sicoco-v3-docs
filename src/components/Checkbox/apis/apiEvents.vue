<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'input',
    description: ' Triggers when an option is selected or unset',
    parameters: 'event: $event',
  },
]
</script>
