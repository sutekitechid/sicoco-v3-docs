<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'v-model',
    type: 'string',
    default: '',
    description: 'The value of the input',
  },
  {
    name: 'input-class',
    type: 'string',
    default: '',
    description: 'The class of the input',
  },
  {
    name: 'required',
    type: 'boolean',
    default: 'false',
    description: 'The input is required',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'The input is disabled',
  },
  {
    name: 'readonly',
    type: 'boolean',
    default: 'false',
    description: 'The input is readonly',
  },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'The input is invalid',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '',
    description: 'The placeholder of the input',
  },
  {
    name: 'type',
    type: 'string',
    default: 'text',
    description: 'The type of the input',
  },
  {
    name: 'min',
    type: 'string | number',
    default: '',
    description: 'The minimum value of the input',
  },
  {
    name: 'max',
    type: 'string | number',
    default: '',
    description: 'The maximum value of the input',
  },
  {
    name: 'exact-length',
    type: 'string | number',
    default: '',
    description: 'The exact length of the input',
  },
  {
    name: 'minlength',
    type: 'string | number',
    default: '',
    description: 'The minimum length of the input',
  },
  {
    name: 'maxlength',
    type: 'string | number',
    default: '',
    description: 'The maximum length of the input',
  },
  {
    name: 'decimal',
    type: 'boolean',
    default: 'true',
    description: 'The input is decimal',
  },
  {
    name: 'step',
    type: 'string | number',
    default: '',
    description: 'The step of the input',
  },
  {
    name: 'custom-validators',
    type: 'object',
    default: '{}',
    description: 'The custom validators of the input',
  },
  {
    name: 'show-password-meter',
    type: 'boolean',
    default: 'false',
    description: 'The password meter is shown',
  },
  {
    name: 'show-password-meter-label',
    type: 'boolean',
    default: 'false',
    description: 'The password meter label is shown',
  },
  {
    name: 'show-password-meter-bar',
    type: 'boolean',
    default: 'false',
    description: 'The password meter bar is shown',
  },
  {
    name: 'size',
    type: 'string',
    default: 'md',
    description: 'The size of the input',
  },
  {
    name: 'data-cy',
    type: 'string',
    default: 'input-field',
    description: 'The data-cy of the input',
  },
  {
    name: 'spin-number',
    type: 'boolean',
    default: 'false',
    description: 'The number is spinned',
  },
  {
    name: 'suffix',
    type: 'string',
    default: '',
    description: 'The suffix of the input',
  },
  {
    name: 'autocomplete',
    type: 'string',
    default: 'off',
    description: 'The autocomplete of the input',
  },
]
</script>
