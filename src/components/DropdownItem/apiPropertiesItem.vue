<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'v-model',
    type: ['Array', 'String', 'Boolean', 'Number'],
    description: 'Binding value',
    values: [],
    default: ''
  },
  {
    name: 'disabled',
    type: 'Boolean',
    description: 'Disables the dropdown',
    values: [],
    default: false
  }
]
</script>