<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'class',
		type: 'string',
		description: 'Custom class for the table header',
		values: '',
		default: '',
	},
	{
		name: 'sticky',
		type: 'boolean',
		description: 'Make the table header sticky',
		values: '',
		default: 'true',
	},
]
</script>
