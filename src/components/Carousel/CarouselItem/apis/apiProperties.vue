<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'class',
		type: 'string',
		default: '',
		description: 'Class CSS tambahan untuk styling carousel item',
		values: [],
	},
]
</script>
