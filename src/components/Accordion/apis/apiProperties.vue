<template>
    <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'always-open',
        type: 'false',
        default: '',
        values: '',
        description: '""',
    },
    {
        name: 'flush',
        type: 'false',
        default: '',
        values: '',
        description: 'true',
    },
]
</script>
