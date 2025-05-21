<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'class',
		type: 'string',
		description: 'Custom class for the component',
		values: '',
		default: '',
	},
	{
		name: 'modelValue',
		type: 'number | string',
		description: 'The current per page value',
		values: '',
		default: 10,
	},
	{
		name: 'options',
		type: 'number[]',
		description: 'The options for per page values',
		values: '',
		default: '[10, 20, 50, 100]',
	},
	{
		name: 'total',
		type: 'number | string',
		description: 'The total number of items',
		values: '',
		default: 0,
	},
	{
		name: 'labelText',
		type: 'string',
		description: 'The label text for the component',
		values: '',
		default: 'Tampilkan',
	},
	{
		name: 'perPageFormatter',
		type: '(perPage: number | string) => string',
		description:
			'Function to format the per page value for display. Default is (perPage) => `${perPage} per halaman`.',
		values: '',
		default: '(perPage) => `${perPage} per halaman`.',
	},
]
</script>
