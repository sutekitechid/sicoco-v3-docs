<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'default',
    description: 'Default dropdown slot option.',
    props: 'option',
  },
  {
    name: 'required',
    description: 'Slot for custom required message.',
    props: '',
  },
  {
    name: 'errors',
    description: 'Slot for custom validator message.',
    props: 'validation',
  },
  {
    name: 'tag',
    description: 'Custom tag.',
    props: '',
  },
]
</script>
