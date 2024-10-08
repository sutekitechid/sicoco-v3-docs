<template>
    <apiEventTable :events="data"/>
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'

const data = [
    {
        name: 'typing',
        description: 'Triggered when the user enters input.',
        parameters: 'event: $event'
    },
    {
        name: 'keypress',
        description: 'Triggered when the user presses the button.',
        parameters: 'event: $event'
    },
]
</script>