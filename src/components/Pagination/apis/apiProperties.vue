<template>
    <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'total-pages',
        type: 'number',
        description: 'Total available pages',
        values: '',
        default: 1,
    },
    {

        name: 'per-page',
        type: 'number',
        description: 'Data displayed per page',
        values: '',
        default: 10,
    },
    {
        name: 'show-all',
        type: 'boolean',
        description: 'Display all data',
        values: '',
        default: false,
    },
    {
        name: 'total-items',
        type: 'number',
        description: 'Total data count',
        values: '',
        default: false,
    },
    {
        name: 'per-page-options',
        type: 'array',
        description: 'Options for displaying data per page',
        values: '',
        default: [10, 20, 50, 100],
    },
    {
        name: 'enable-all-per-page',
        type: 'boolean',
        description: '',
        values: '',
        default: false,
    },
    {
        name: 'use-per-page',
        type: 'boolean',
        description: '',
        values: '',
        default: true,
    },
    {
        name: 'layout',
        type: 'string',
        description: '',
        values: '',
        default: '',
    },
    {
        name: 'show-icons',
        type: 'boolean',
        description: '',
        values: '',
        default: false,
    },
    {
        name: 'slice-length',
        type: 'number',
        description: '',
        values: '',
        default: 0,
    },
    {
        name: 'previous-label',
        type: 'string',
        description: '',
        values: '',
        default: '',
    },
    {
        name: 'next-label',
        type: 'string',
        description: '',
        values: '',
        default: '',
    },
]
</script>