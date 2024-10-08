<template>
    <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'totalPages',
        type: 'number',
        description: 'Total available pages',
        values: '',
        default: 1,
    },
    {
        name: 'perPage',
        type: 'number',
        description: 'Data displayed per page',
        values: '',
        default: 10,
    },
    {
        name: 'showAll',
        type: 'boolean',
        description: 'Display all data',
        values: '',
        default: false,
    },
    {
        name: 'totalItems',
        type: 'number',
        description: 'Total data count',
        values: '',
        default: false,
    },
    {
        name: 'perPageOptions',
        type: 'array',
        description: 'Options for displaying data per page',
        values: '',
        default: [10, 20, 50, 100],
    },
    {
        name: 'enableAllPerPage',
        type: 'boolean',
        description: '',
        values: '',
        default: false,
    },
    {
        name: 'usePerPage',
        type: 'boolean',
        description: '',
        values: '',
        default: false,
    },
    {
        name: 'layout',
        type: 'string',
        description: '',
        values: '',
        default: '',
    },
    {
        name: 'showIcons',
        type: 'boolean',
        description: '',
        values: '',
        default: false,
    },
    {
        name: 'sliceLength',
        type: 'number',
        description: '',
        values: '',
        default: 0,
    },
    {
        name: 'previousLabel',
        type: 'string',
        description: '',
        values: '',
        default: '',
    },
    {
        name: 'nextLabel',
        type: 'string',
        description: '',
        values: '',
        default: '',
    },
]
</script>