<template>
    <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'v-model',
        type: [
            'array',
            'string',
            'booelan',
            'number'
        ],
        default: '',
        values: '',
        description: 'Binding value',
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Checkbox validation is required',
    },
    {
        name: 'custom-validators',
        type: 'object',
        default: '',
        values: '',
        description: 'Add custom validation to the checkbox. Filling in the errors slots is required.',
    },
]
</script>
