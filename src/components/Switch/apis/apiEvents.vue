<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'

const data = [
	{
		name: 'update:modelValue',
		description: 'Emitted when the model value changes.',
		parameters: 'value: boolean | string',
	},
]
</script>
