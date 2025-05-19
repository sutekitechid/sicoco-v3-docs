<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'v-model',
		type: ['array', 'string', 'booelan', 'number', 'object'],
		default: '',
		values: '',
		description: 'Binding value.',
	},
	{
		name: 'value',
		type: ['array', 'string', 'booelan', 'number', 'object'],
		default: '',
		values: '',
		description: 'determine the checkbox value',
	},
	{
		name: 'variant',
		type: 'string',
		default: 'primary',
		values: [
			'default',
			'default light',
			'primary',
			'primary light',
			'danger',
			'danger light',
			'warning',
			'warning light',
			'success',
			'success light',
		],
		description: 'Determine the color of a checkbox',
	},
	{
		name: 'size',
		type: 'string',
		default: 'md',
		values: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
		description: 'Determine the size of a checkbox',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Disabled checkbox',
	},
	{
		name: 'checked',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Checked checkbox',
	},
	{
		name: 'checked-icon',
		type: 'string',
		default: 'si-check',
		values: '',
		description: 'Icon when checked',
	},
	{
		name: 'rounded',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Rounded checkbox',
	},
	{
		name: 'dataCy',
		type: 'string',
		default: '',
		values: '',
		description: 'Custom data-cy attribute',
	},
	{
		name: 'alwaysShowIndicator',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Show the indicator inside the checkbox',
	},
]
</script>
