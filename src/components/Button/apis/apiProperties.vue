<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'color',
    type: 'string',
    default: 'deault',
    description: 'Determines the color of the button',
    values: [
      'Default',
      'secondary',
      'alternative',
      'dark',
      'light',
      'green',
      'red',
      'yellow',
      'purple',
    ],
  },
  {
    name: 'size',
    type: 'string',
    default: 'sm',
    description: 'determine the size of the button',
    values: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  {
    name: 'pill',
    type: 'boolean',
    default: false,
    description: 'Make the button oval',
    values: [],
  },
  {
    name: 'square',
    type: 'boolean',
    default: false,
    description: 'membuat tombol menjadi kotak',
    values: [],
  },
  {
    name: 'outline',
    type: 'boolean',
    default: false,
    description:
      'change the button style with a transparent background and border color according to the props color',
    values: [],
  },
  {
    name: 'loading',
    type: 'boolean',
    default: false,
    description: 'Displays loading on the button',
    values: [],
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    description: 'membuat tombol menjadi disabled',
    values: [],
  },
]
</script>