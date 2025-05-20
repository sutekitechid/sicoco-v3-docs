<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'id',
		type: 'string',
		description: 'Required. Unique identifier for the Table.',
		values: [],
		default: '',
	},
	{
		name: 'data',
		type: 'array',
		description: 'Data to be displayed in the table.',
		values: [],
		default: '',
	},
	{
		name: 'selectable',
		type: 'boolean',
		description: 'Enables row selection.',
		values: [],
		default: false,
	},
	{
		name: 'v-model',
		type: 'array',
		description: 'Two-way binding for the selected rows.',
		values: [],
		default: '',
	},
	{
		name: 'paginated',
		type: 'boolean',
		description: 'Enables pagination for the table.',
		values: [],
		default: '',
	},
	{
		name: 'page',
		type: 'number',
		description:
			'Current page number. You can use v-model:page to apply two-way binding. The page property will also change when you set infiniteScroll to true.',
		values: [],
		default: 1,
	},
	{
		name: 'per-page',
		type: 'number',
		description:
			'Number of items per page. You can use v-model:perPage to apply two-way binding.',
		values: [],
		default: 20,
	},
	{
		name: 'total',
		type: 'number',
		description:
			'Total number of items in the data. This is used for pagination.',
		values: [],
		default: 0,
	},
	{
		name: 'sortable',
		type: 'boolean',
		description: 'Enables column sorting.',
		values: [],
		default: false,
	},
	{
		name: 'show-numbering',
		type: 'boolean',
		description: 'Shows numbering for the rows.',
		values: [],
		default: true,
	},
	{
		name: 'scroll-y',
		type: 'string',
		description:
			'Sets the height of the table. Use "auto" to set the height automatically.',
		values: [],
		default: '40rem',
	},
	{
		name: 'is-row-selectable',
		type: 'Function(row: any) => boolean',
		description: 'Function to determine if a row is selectable.',
		values: [],
		default: '',
	},
	{
		name: 'row-class',
		type: 'Function(row: any) => string',
		description: 'Function to set the class of a row.',
		values: [],
		default: '',
	},
	{
		name: 'loading',
		type: 'boolean',
		description: 'Shows a loading spinner when true.',
		values: [],
		default: false,
	},
	{
		name: 'sticky-headers',
		type: 'boolean',
		description: 'Makes the table headers sticky.',
		values: [],
		default: true,
	},
	{
		name: 'headers-text-wrap',
		type: 'boolean',
		description: 'Wraps the text in the headers.',
		values: [],
		default: true,
	},
	{
		name: 'data-cy',
		type: 'string',
		description: 'Custom data-cy attribute for the table.',
		values: [],
		default: false,
	},
	{
		name: 'show-table-options',
		type: 'boolean',
		description:
			'Shows the table options dropdown when clicking the table header.',
		values: [],
		default: true,
	},
	{
		name: 'infinite-scroll',
		type: 'boolean',
		description: 'Enables infinite scroll for the table.',
		values: [],
		default: false,
	},
]
</script>
