<template>
    <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'label',
        type: 'string',
        default: 'undefined',
        values: '',
        description: 'Total pages available',
    },
    {
        name: 'autoComplete',
        type: 'string',
        default: 'off',
        values: '',
        description: 'Data displayed on each page',
    },
]
</script>
