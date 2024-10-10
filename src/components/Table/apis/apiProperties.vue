<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
  {
    name: 'stripped',
    type: 'boolean',
    description: 'To display a different background on each row',
    values: '',
    default: false,
  },
  {
    name: 'scrollable',
    type: 'boolean',
    description: 'Makes the table scrollable if the content is too long',
    values: '',
    default: false,
  },
  {
    name: 'fullwidth',
    type: 'boolean',
    description: 'Makes the table size 100%',
    values: '',
    default: false,
  },
  {
    name: 'stripped',
    type: 'boolean',
    description: 'Displays a different background on each column',
    values: '',
    default: false,
  },
  {
    name: 'hoverable',
    type: 'boolean',
    description: 'Displays an effect when the cursor is pointed at the table',
    values: '',
    default: false,
  },
  {
    name: 'top-horizontal-scroll',
    type: 'boolean',
    description: 'Displays a scrollbar at the top of the header',
    values: '',
    default: false,
  },
]
</script>