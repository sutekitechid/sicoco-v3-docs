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
            'object'
        ],
        default: '',
        values: '',
        description: 'Value for radio button.',
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Radio button disabled',
    },
    {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Displaying an error message.',
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Must be selected.',
    },
    {
        name: 'type',
        type: 'string',
        default: 'primary',
        values: '',
        description: 'Apply color to the checkbox.',
    },
]
</script>
