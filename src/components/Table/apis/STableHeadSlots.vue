<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    "name": "default",
    "description": "Used to wrap content in the table header",
    "props": ""
  },
]
</script>