<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'default',
    description: 'Represents one section of the accordion.',
    props: '',
    },
]
</script>
