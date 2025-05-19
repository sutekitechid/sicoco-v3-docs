<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'modelValue',
		type: 'Date | null',
		description: 'The currently selected date (for single date mode).',
		values: [],
		default: 'null',
	},
	{
		name: 'importantDates',
		type: 'ImportantDate[]',
		description: 'Array of important dates to highlight on the calendar.',
		values: [],
		default: '[]',
	},
	{
		name: 'dateRange',
		type: 'boolean',
		description: 'Enable range selection mode.',
		values: [],
		default: 'false',
	},
	{
		name: 'readonly',
		type: 'boolean',
		description: 'Make the calendar read-only (dates cannot be selected).',
		values: [],
		default: 'false',
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
		name: 'showOutsideViewDates',
		type: 'boolean',
		description: 'Show dates from previous/next month in the current view.',
		values: [],
		default: 'true',
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
