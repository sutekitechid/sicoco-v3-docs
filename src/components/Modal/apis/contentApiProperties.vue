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
			'Custom CSS classes to style and shape the Dialog Content component',
	},
	{
		name: 'z-index',
		type: 'string',
		default: '50',
		values: '',
		description: 'Z-index of the component',
	},
]
</script>
