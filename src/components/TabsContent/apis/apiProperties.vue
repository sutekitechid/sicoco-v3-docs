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
		values: '',
		description: 'The class name of the tabs content',
	},
	{
		name: 'value',
		type: 'string | number',
		default: '',
		values: '',
		description: 'A unique value that associates the content with a trigger',
	},
]
</script>
