<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'

const data = [
	{
		name: 'update:modelValue',
		description: 'Emitted when the selected date range changes.',
		parameters: 'value: [Date | null, Date | null]',
	},
	{
		name: 'month-change',
		description: 'Emitted when the month is changed.',
		parameters: 'month: number',
	},
	{
		name: 'year-change',
		description: 'Emitted when the year is changed.',
		parameters: 'year: number',
	},
]
</script>
