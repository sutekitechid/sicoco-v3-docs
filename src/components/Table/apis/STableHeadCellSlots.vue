<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    "name": "default",
    "description": "Used to display content in the table header cell",
    "props": ""
  },
]
</script>