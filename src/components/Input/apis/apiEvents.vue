<template>
  <ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
  {
    name: 'focus',
    description: 'The input is focused',
    parameters: 'event: $event',
  },
  {
    name: 'blur',
    description: 'The input is blurred',
    parameters: 'event: $event',
  },
  {
    name: 'input',
    description: 'The input is changed',
    parameters: 'value: string | number',
  },
  {
    name: 'keypress',
    description: 'The key is pressed',
    parameters: 'event: $event',
  },
]
</script>
