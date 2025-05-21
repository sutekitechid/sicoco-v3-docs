<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'modelValue',
		type: 'CalendarDateTime | CalendarDate | string | null',
		description: 'The selected time value.',
		values: [],
		default: 'null',
	},
	{
		name: 'required',
		type: 'boolean',
		description: 'Whether the time picker is required.',
		values: [],
		default: 'false',
	},
	{
		name: 'disabled',
		type: 'boolean',
		description: 'Whether the time picker is disabled.',
		values: [],
		default: 'false',
	},
	{
		name: 'placeholder',
		type: 'string',
		description: 'Placeholder text for the input field.',
		values: [],
		default: "'Select time'",
	},
	{
		name: 'dataCy',
		type: 'string',
		description: 'Custom data-cy attribute for testing.',
		values: [],
		default: "'time-picker'",
	},
	{
		name: 'customValidators',
		type: 'Record<string, any>',
		description: 'Custom validation rules for the input.',
		values: [],
		default: '{}',
	},
]
</script>
