<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'class',
		type: 'string',
		description: 'Additional custom CSS classes.',
		values: [],
		default: "''",
	},
	{
		name: 'shadow',
		type: 'boolean',
		description: 'Add shadow to the card',
		default: 'false',
	},
	{
		name: 'border',
		type: 'boolean',
		description: 'Add border to the card',
		default: 'false',
	},
	{
		name: 'rounded',
		type: 'boolean',
		description: 'Border radius of the card.',
		default: 'false',
	},
]
</script>
