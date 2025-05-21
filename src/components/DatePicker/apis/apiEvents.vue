<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'

const data = [
	{
		name: 'update:modelValue',
		description:
			'Emitted when the selected date is updated in single date mode.',
		parameters: 'value: DateValue | null',
	},
	{
		name: 'update:start',
		description: 'Emitted when the start date is updated in range mode.',
		parameters: 'value: DateValue | null',
	},
	{
		name: 'update:end',
		description: 'Emitted when the end date is updated in range mode.',
		parameters: 'value: DateValue | null',
	},
]
</script>
