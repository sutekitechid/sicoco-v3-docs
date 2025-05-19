<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'title',
		type: 'string',
		default: "''",
		values: '',
		description: 'Title of the toast message.',
	},
	{
		name: 'description',
		type: 'string',
		default: "''",
		values: '',
		description: 'Description or content of the toast.',
	},
	{
		name: 'variant',
		type: 'string',
		default: "'default'",
		values: ['primary', 'success', 'danger', 'warning'],
		description: 'Visual style of the toast.',
	},
	{
		name: 'duration',
		type: 'number',
		default: '3000',
		values: '',
		description: 'Duration in milliseconds before the toast disappears.',
	},
	{
		name: 'indefinite',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'If true, the toast will not disappear automatically.',
	},
	{
		name: 'position',
		type: 'string',
		default: 'bottom',
		values: ['top', ' bottom '],
		description: 'Position of the toast container.',
	},
]
</script>
