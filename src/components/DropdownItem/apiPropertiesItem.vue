<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'value',
		type: 'string | number | object | boolean',
		description: 'The value of the dropdown item.',
		values: [],
		default: '',
	},
	{
		name: 'disabled',
		type: 'boolean',
		description: 'Disables the dropdown item.',
		values: [],
		default: false,
	},
	{
		name: 'class',
		type: 'string',
		description: 'Additional CSS classes for the dropdown item.',
		values: [],
		default: '',
	},
	{
		name: 'type',
		type: 'string',
		description: 'Visual variant type for the dropdown item.',
		values: [
			'default',
			'danger',
			'success',
			'warning',
			'info',
			'primary',
			'secondary',
		],
		default: 'default',
	},
]
</script>
