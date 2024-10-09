<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'default',
    description: 'This component is used to wrap the content that will be hidden or displayed based on interactions with SAccordionHeader.',
    props: '',
    },
]
</script>
