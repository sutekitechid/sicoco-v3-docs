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
		name: 'size',
		type: 'string',
		description: 'Size of the table head',
		values: ['sm', 'md', 'lg'],
		default: '',
	},
	{
		name: 'textWrap',
		type: 'boolean',
		description: 'Enable text wrapping in the table head',
		values: '',
		default: 'true',
	},
]
</script>
