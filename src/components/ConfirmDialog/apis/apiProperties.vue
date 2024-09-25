<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'title',
    type: 'String',
    default: 'Konfirmasi',
    description: 'Dialog confirmation title',
    values: [],
  },
  {
    name: 'message',
    type: 'String',
    default: '',
    description: 'Message on the dialog confirmation',
    values: [],
  },
  {
    name: 'confirm-text',
    type: 'String',
    default: '',
    description: 'Text of the confirmation action button',
    values: [],
  },
  {
    name: 'cancel-text',
    type: 'String',
    default: '',
    description: 'Text of the cancel action button',
    values: [],
  },
  {
    name: 'type',
    type: 'String',
    default: '',
    description: 'Theme color of the dialog confirmation',
    values: [
      'warning', 'success', 'danger', 'info'
    ],
  },
  {
    name: 'data-cy',
    type: 'String',
    default: 'confirmation-dialog',
    description: 'Cypress selector on the element',
    values: [],
  },
  {
    name: 'contentWrapperClass',
    type: 'String',
    default: '!w-[455px]',
    description: 'Modal class name',
    values: [],
  },
]
</script>