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
			'Custom CSS classes to style and shape the Skeleton component.',
	},
]
</script>
