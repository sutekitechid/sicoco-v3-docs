<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'required',
    description: 'Change the appearance for required field validation.',
    props: '',
    },
  {
    name: 'default',
    description: 'Change the appearance of the checkbox label',
    props: '',
    },
]
</script>
