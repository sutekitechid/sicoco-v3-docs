<template>
    <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'value',
        type: [
            'string',
            'number',
            'booelan',
            'array',
            'object'
        ],
        default: '""',
        values: '',
        description: '',
    },
    {
        name: 'required',
        type: 'boolean',
        default: '',
        values: '',
        description: 'Radio button must be selected',
    },
    {
        name: 'customValidators',
        type: 'object',
        default: '',
        values: '{}',
        description: 'Validation of conditions that must be met.',
    },
]
</script>
