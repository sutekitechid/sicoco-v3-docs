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
]
</script>
