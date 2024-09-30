<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'trigger',
    description: 'Change the dropdown trigger with a custom component',
    props: 'open, modelValue, invalid',
  },
  {
    name: 'icon',
    description: 'Change the icon on the dropdown',
    props: '',
  },
  {
    name: 'empty',
    description: 'Change the display when the dropdown options are empty',
    props: '',
  },
  {
    name: 'errors',
    description: 'Determine the display for custom errors (Active if the customValidators prop is filled)',
    props: '',
  },
  {
    name: 'required',
    description: 'Change the display when the dropdown value is not filled (Active if the required prop is true)',
    props: '',
  },
  {
    name: 'default',
    description: 'Change the display of the dropdown options',
    props: '',
  },
]
</script>