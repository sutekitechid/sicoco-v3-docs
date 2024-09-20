<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'required',
    description: 'Change appearance for required field validation',
    props: '',
    },
  {
    name: 'minlength',
    description: 'Change appearance for minimum character validation',
    props: '',
  },
]
</script>
