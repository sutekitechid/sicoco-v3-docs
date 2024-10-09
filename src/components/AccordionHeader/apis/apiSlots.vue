<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'default',
    description: 'Functions as a button or clickable area for users to open or close the content.',
    props: '',
    },
]
</script>
