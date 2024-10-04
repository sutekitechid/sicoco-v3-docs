<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
    {
    name: 'default',
    description: 'List of SRadio used.',
    props: '',
    },
    {
    name: 'required',
    description: 'Error message that appears when the value is not present',
    props: '',
    },
    {
    name: 'errors',
    description: 'Error message that appears when validation fails.',
    props: '',
    },
]
</script>
