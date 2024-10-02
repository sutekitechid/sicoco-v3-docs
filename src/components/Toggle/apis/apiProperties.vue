<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
  {
  name: 'true-value',
  type: 'boolean/string',
  description: '',
  values: '',
  default: false,
},
{
  name: 'false-value',
  type: 'boolean/string',
  description: '',
  values: '',
  default: false,
},
{
  name: 'disabled',
  type: 'boolean',
  description: 'disabled toggle',
  values: '',
  default: false,
},
]
</script>