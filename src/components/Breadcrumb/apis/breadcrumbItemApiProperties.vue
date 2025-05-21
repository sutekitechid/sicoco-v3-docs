<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'class',
		type: 'string',
		default: "''",
		values: '',
		description:
			'Additional CSS classes for the root element of the breadcrumb.',
	},
	{
		name: 'to',
		type: 'string | unknown',
		values: '',
		description: 'The target route for the breadcrumb.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		description:
			'If true, the breadcrumb item will be disabled and not clickable.',
	},
	{
		name: 'as',
		type: 'string',
		description: 'The HTML element to use for the breadcrumb item.',
	},
	{
		name: 'target',
		type: 'string',
		description: 'The target attribute for the link.',
	},
]
</script>
