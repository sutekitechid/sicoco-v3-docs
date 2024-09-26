<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'onCancel',
    type: 'boolean',
    default: '',
    description: 'To display a different background for each row',
    },
  {
    name: 'active',
    type: 'boolean',
    default: '',
    description: 'To make a table scrollable if the content is too long',
  },
]
</script>
