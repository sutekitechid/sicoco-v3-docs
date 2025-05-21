<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'class',
		type: 'string',
		description: 'Custom class for the table',
		values: '',
		default: '',
	},
	{
		name: 'value',
		type: 'string | number',
		description: 'Value of the table cell',
		values: '',
		default: '',
	},
	{
		name: 'size',
		type: 'string',
		description: 'Size of the table cell',
		values: ['sm', 'md', 'lg'],
		default: '',
	},
	{
		name: 'loading',
		type: 'boolean',
		description: 'Loading state of the table cell',
		values: '',
		default: '',
	},
]
</script>
