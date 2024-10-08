<template>
    <apiEventTable :events="data"/>
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'

const data = [
    {
        name: 'typing',
        description: 'Ditrigger ketika user memasukkan input',
        parameters: 'event: $event'
    },
    {
        name: 'keypress',
        description: 'Ditrigger ketika user menekan tombol',
        parameters: 'event: $event'
    },
]
</script>