<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    "name": "default",
    "description": "Message on confirmation dialog",
    "props": ""
  },
  {
    "name": "footer",
    "description": "Actions on confirmation dialog",
    "props": ""
  }
]
</script>