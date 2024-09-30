<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'typing',
    description: 'Triggers when the user is typing (active when the searchable prop is true).',
    parameters: 'value: string',
  },
  {
    name: 'select',
    description: 'Triggers when an option is selected or deselected',
    parameters: 'event: $event',
  },
  {
    name: 'active-change',
    description: 'Triggered when the dropdown is opened or closed',
    parameters: 'value: Boolean',
  },
  {
    name: 'focus',
    description: 'Triggered when the dropdown gains focus',
    parameters: 'event: $event',
  },
]
</script>