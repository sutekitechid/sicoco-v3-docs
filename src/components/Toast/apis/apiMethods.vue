<template>
	<ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'

const data = [
	{
		name: 'useToast',
		description: 'Composable function to access toast methods.',
		parameters: 'none',
		return: '{ toast }',
	},
	{
		name: 'toast',
		description: 'Show a toast notification.',
		parameters:
			'options: { title, description, variant, duration, indefinite, position }',
		return: 'void',
	},
]
</script>
