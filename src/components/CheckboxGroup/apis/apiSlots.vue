<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'default',
    description: 'Customize the appearance of the checkbox.',
    props: '',
    },
  {
    name: 'required',
    description: 'Customize the appearance for required field validation.',
    props: '',
    },
  {
    name: 'errors',
    description: 'Define the appearance for custom error (Active when the customValidators props are set.)',
    props: '',
    },
]
</script>
