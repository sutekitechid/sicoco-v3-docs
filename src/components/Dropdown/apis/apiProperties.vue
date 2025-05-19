<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'class',
		type: 'string',
		description: 'Additional CSS classes for the dropdown.',
		values: [],
		default: '',
	},
	{
		name: 'modelValue',
		type: 'any',
		description: 'Binding value for the dropdown (v-model).',
		values: [],
		default: '',
	},
	{
		name: 'placeholder',
		type: 'string',
		description: 'Dropdown label if no value is selected.',
		values: [],
		default: '',
	},
	{
		name: 'disabled',
		type: 'boolean',
		description: 'Disables the dropdown.',
		values: [],
		default: false,
	},
	{
		name: 'required',
		type: 'boolean',
		description: 'Validates the dropdown as required.',
		values: [],
		default: false,
	},
	{
		name: 'searchable',
		type: 'boolean',
		description: 'Enables searching for options in the dropdown.',
		values: [],
		default: false,
	},
	{
		name: 'loading',
		type: 'boolean',
		description: 'Displays a loading indicator.',
		values: [],
		default: false,
	},
	{
		name: 'multiple',
		type: 'boolean',
		description: 'Allows selecting multiple options.',
		values: [],
		default: false,
	},
	{
		name: 'customValidators',
		type: 'Record<string, any>',
		description:
			'Adds custom validation to the dropdown. Must fill in the errors slot.',
		values: [],
		default: '',
	},
	{
		name: 'ignoreActiveItemValue',
		type: 'boolean',
		description: 'Ignore the active item value.',
		values: [],
		default: false,
	},
	{
		name: 'side',
		type: "'top' | 'right' | 'bottom' | 'left'",
		description: 'Dropdown menu side position.',
		values: ['top', 'right', 'bottom', 'left'],
		default: 'bottom',
	},
	{
		name: 'align',
		type: "'start' | 'center' | 'end'",
		description: 'Dropdown menu alignment.',
		values: ['start', 'center', 'end'],
		default: 'center',
	},
	{
		name: 'pending',
		type: 'boolean',
		description: 'Shows pending state.',
		values: [],
		default: false,
	},
	{
		name: 'scrollable',
		type: 'boolean',
		description: 'Makes the dropdown menu scrollable.',
		values: [],
		default: false,
	},
	{
		name: 'dataCySearchInput',
		type: 'string',
		description: 'Custom data-cy attribute for the search input.',
		values: [],
		default: '',
	},
	{
		name: 'appendToBody',
		type: 'boolean',
		description: 'Appends the dropdown to the body (prevents event bubbling).',
		values: [],
		default: false,
	},
	{
		name: 'fitContent',
		type: 'boolean',
		description: 'Makes the dropdown menu fit its content.',
		values: [],
		default: false,
	},
	{
		name: 'dataCy',
		type: 'string',
		description: 'Custom data-cy attribute for the dropdown.',
		values: [],
		default: '',
	},
]
</script>
