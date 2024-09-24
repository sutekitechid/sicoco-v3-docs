<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'v-model',
    type: [
      'array',
      'string',
      'boolean',
      'number',
      'object'
    ],
    default: '',
    description: 'Binding values',
    },
  {
    name: 'readonly',
    type: 'boolean',
    default: false,
    description: 'Makes the checkbox view-only"',
    },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Disable checkbox',
    },
  {
    name: 'required',
    type: 'boolean',
    default: false,
    description: 'Checkbox validation is required',
    },
  {
    name: 'maxlength',
    type: ['String','Number'],
    default: '',
    description: 'Maximum character count',
    },
  {
    name: 'rows',
    type: ['String', 'Number'],
    default: '3',
    description: 'Number of rows',
    },
  {
    name: 'placeholder',
    type: 'String',
    default: '',
    description: 'Textarea label',
    },
  {
    name: 'size',
    type: 'String',
    default: 'md',
    description: 'Textarea size',
  },
]
</script>
