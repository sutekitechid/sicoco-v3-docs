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
            'number',
            'object'
        ],
        default: '',
        values: '',
        description: 'Binding value.',
    },
    {
        name: 'value',
        type: [
            'array',
            'string',
            'booelan',
            'number',
            'object'
        ],
        default: '',
        values: '',
        description: 'determine the checkbox value',
    },
    {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Make the checkbox visible only',
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Disabled checkbox',
    },
    {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'Set checkbox as invalid',
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        values: '',
        description: 'The validation check box must be filled in',
    },
    {
        name: 'type',
        type: 'string',
        default: 'primary',
        values: [
            'primary',
            'danger',
            'warning',
            'success',
            'info'
        ],
        description: 'Determine the color of a checkbox',
    },
]
</script>
