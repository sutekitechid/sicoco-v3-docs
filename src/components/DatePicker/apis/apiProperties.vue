<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'modelValue',
		type: 'DateValue | null',
		description: 'Selected date (for single date mode).',
		values: [],
		default: 'null',
	},
	{
		name: 'start',
		type: 'DateValue | null',
		description: 'Start value of the selected date range.',
		values: [],
		default: 'null',
	},
	{
		name: 'end',
		type: 'DateValue | null',
		description: 'End value of the selected date range.',
		values: [],
		default: 'null',
	},
	{
		name: 'placeholder',
		type: 'string',
		description: 'Placeholder text for the input field.',
		values: [],
		default: "'Pick a date'",
	},
	{
		name: 'dateRange',
		type: 'boolean',
		description: 'Enable date range selection.',
		values: [],
		default: 'false',
	},
	{
		name: 'importantDates',
		type: 'ImportantDate[]',
		description: 'Array of important dates to highlight.',
		values: [],
		default: '[]',
	},
	{
		name: 'formatDate',
		type: 'string',
		description: 'Date format type.',
		values: [],
		default: 'STANDARD',
	},
	{
		name: 'locale',
		type: 'string',
		description: 'Locale for date formatting.',
		values: [],
		default: "'id-ID'",
	},
	{
		name: 'required',
		type: 'boolean',
		description: 'Whether the datepicker selection is required.',
		values: [],
		default: 'false',
	},
	{
		name: 'disabled',
		type: 'boolean',
		description: 'Whether the datepicker selection is disabled.',
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
		name: 'dataCy',
		type: 'string',
		description: 'Custom data-cy attribute for testing.',
		values: [],
		default: "''",
	},
	{
		name: 'customValidators',
		type: 'Record<string, any>',
		description: 'Custom validation rules for the input.',
		values: [],
		default: 'null',
	},
	{
		name: 'class',
		type: 'string',
		description: 'Additional custom CSS classes.',
		values: [],
		default: "''",
	},
]
</script>
