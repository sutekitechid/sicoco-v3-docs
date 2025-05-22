<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'default',
    description: 'Content in modal',
    props: '',
  },
]
</script>
