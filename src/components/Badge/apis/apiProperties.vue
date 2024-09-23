<template>
    <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'type',
        type: 'string',
        default: 'primary',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'purple'
        ],
        description: 'Changing the badge color.',
    },
    {
        name: 'rounded',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Making a badge oval.',
    },
    {
        name: 'closable',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Add a close icon to allow the badge to be closed.',
    },
]
</script>
