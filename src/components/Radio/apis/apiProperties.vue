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
        description: 'value for radio button.',
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'radio button disabled',
    },
    {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'displaying an error message.',
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'must be selected.',
    },
    {
        name: 'type',
        type: 'string',
        default: 'primary',
        values: '',
        description: 'apply color to the checkbox.',
    },
]
</script>
