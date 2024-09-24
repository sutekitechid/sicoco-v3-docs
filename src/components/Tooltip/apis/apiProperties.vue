<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
  {
    name: 'name',
    type: 'string',
    description: '',
    values: '',
    default: '',
  },
  {
    name: 'content',
    type: 'string',
    description: '',
    values: '',
    default: '',
  },
  {
    name: 'trigger',
    type: 'string',
    description: '',
    values: [
      'click',
    ],
    default: 'click',
  },
  {
    name: 'placement',
    type: 'string',
    description: '',
    values: [
    'top',
    'top-start  ',
    'top-end  ',
    'bottom ',
    'bottom-start ',
    'bottom-end ',
    'left ',
    'left-start ',
    'left-end ',
    'right  ',
    'right-start  ',
    'right-end  '
    ],
    default: 'bottom',
  },
  {
    name: 'options',
    type: 'object',
    description: '',
    values: '',
    default: '',
  },
]
</script>