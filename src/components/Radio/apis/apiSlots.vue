<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'default',
    description: 'Label radio button.',
    props: '',
    },
  {
    name: 'required',
    description: 'Text message if no value is present',
    props: '',
    },
]
</script>
