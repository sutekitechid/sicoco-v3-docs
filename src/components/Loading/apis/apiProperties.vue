<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'can-cancel',
    type: 'boolean',
    default: '',
    description: 'To indicate whether the loading is closable or not',
    },
  {
    name: 'active',
    type: 'boolean',
    default: '',
    description: 'To open and close the loading.',
  },
]
</script>
