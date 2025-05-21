<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'total',
		type: 'number | string',
		description: 'Total data',
		values: '',
		default: 0,
	},
	{
		name: 'perPage',
		type: 'number | string',
		description: 'Number of items per page',
		values: '',
		default: 20,
	},
	{
		name: 'page',
		type: 'number | string',
		description: 'Current page number',
		values: '',
		default: 1,
	},
	{
		name: 'defaultPage',
		type: 'number | string',
		description: 'Default page number',
		values: '',
		default: 1,
	},
	{
		name: 'options',
		type: 'number[]',
		description: 'Array of options for items per page',
		values: '',
		default: undefined,
	},
	{
		name: 'perPageLabelText',
		type: 'string',
		description: 'Label text for items per page dropdown',
		values: '',
		default: undefined,
	},
	{
		name: 'perPageItemFormatter',
		type: '(perPage) => string',
		description:
			'Function to format the items per page label text. Receives the number of items as an argument.',
		values: '',
		default: undefined,
	},
	{
		name: 'showPerPageOptions',
		type: 'boolean',
		description:
			'Whether to show the options for items per page dropdown or not.',
		values: '',
		default: true,
	},
	{
		name: 'showPaginationInput',
		type: 'boolean',
		description: 'Whether to show the pagination input field or not.',
		values: '',
		default: true,
	},
]
</script>
