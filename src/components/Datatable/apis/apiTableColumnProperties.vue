<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'field',
		type: 'string',
		description: 'Unique identifier for the column. Used for sorting.',
		values: [],
		default: '',
	},
	{
		name: 'sortable',
		type: 'boolean',
		description: 'Enables sorting for the column.',
		values: [],
		default: false,
	},
	{
		name: 'header-text-wrap',
		type: 'boolean',
		description: 'Wraps the header text.',
		values: [],
		default: false,
	},
]
</script>
