<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
  name: 'default',
  description: 'Change the display of the dropdown options',
  props: '',
}
]
</script>