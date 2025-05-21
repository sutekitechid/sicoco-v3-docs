<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'modelValue',
		type: '[Date | null, Date | null]',
		description: 'The selected date range (start and end).',
		values: [],
		default: '[null, null]',
	},
	{
		name: 'importantDates',
		type: 'ImportantDate[]',
		description: 'Array of important dates to highlight on the calendar.',
		values: [],
		default: '[]',
	},
	{
		name: 'yearsRange',
		type: 'number[]',
		description: 'Array of years to show in the year dropdown.',
		values: [],
		default: '[]',
	},
	{
		name: 'locale',
		type: 'string',
		description: 'Locale for calendar display.',
		values: [],
		default: "'id'",
	},
	{
		name: 'class',
		type: 'string',
		description: 'Additional custom CSS classes.',
		values: [],
		default: "''",
	},
	{
		name: 'dataCy',
		type: 'string',
		description: 'Custom data-cy attribute for testing.',
		values: [],
		default: "''",
	},
]
</script>
