<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    "name": "trigger",
    "description": "Content that will be hovered",
    "props": ""
  },
  {
    "name": "content",
    "description": "Content that appears after trigger is hovered",
    "props": ""
  }
]
</script>
