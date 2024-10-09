<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    "name": "default",
    "description": "To display a different background on each row",
    "props": ""
  },
]
</script>
