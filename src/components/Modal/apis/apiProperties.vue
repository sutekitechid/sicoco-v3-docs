<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'title',
    type: 'string',
    description: 'Title in the modal',
    values: '',
    default: '',
  },
  {
    name: 'subtitle',
    type: 'string',
    description: 'Subtitle in the modal',
    values: '',
    default: '',
  },
  {
    name: 'isAutoClose',
    type: 'boolean',
    description: 'Modal automatically closes',
    values: '',
    default: false,
  },
  {
    name: 'autoCloseDuration',
    type: 'number',
    description: 'Time for modal to automatically close',
    values: '',
    default: 5,
  },
  {
    name: 'defaultHidden',
    type: 'boolean',
    description: 'Initiate default modal',
    values: '',
    default: true,
  },
  {
    name: 'programmatic',
    type: 'boolean',
    description: 'To be used in setup()',
    values: '',
    default: false,
  },
]
</script>