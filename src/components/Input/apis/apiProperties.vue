<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'v-model',
		type: 'string | number',
		default: '',
		description: 'The value of the input',
	},
	{
		name: 'class',
		type: 'string',
		description: 'Additional custom CSS classes.',
		values: [],
		default: "''",
	},
	{
		name: 'size',
		type: 'string',
		default: 'md',
		values: ['sm', 'md', 'lg'],
		description: 'The size of the input',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'The input is disabled',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: '',
		description: 'The placeholder of the input',
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false',
		description: 'The input is required',
	},
	{
		name: 'type',
		type: 'string',
		default: 'text',
		values: [
			'text',
			'number',
			'currency',
			'password',
			'email',
			'url',
			'numeric',
		],
		description: 'The type of the input',
	},
	{
		name: 'custom-validators',
		type: 'object',
		default: '{}',
		description: 'The custom validators of the input',
	},
	{
		name: 'min',
		type: 'number',
		default: '',
		description: 'The minimum value of the input',
	},
	{
		name: 'max',
		type: 'number',
		default: '',
		description: 'The maximum value of the input',
	},
	{
		name: 'exact-length',
		type: 'number',
		default: '',
		description: 'The exact length of the input',
	},
	{
		name: 'min-length',
		type: 'number',
		default: '',
		description: 'The minimum length of the input',
	},
	{
		name: 'max-length',
		type: 'number',
		default: '',
		description: 'The maximum length of the input',
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false',
		description: 'The input is readonly',
	},
	{
		name: 'decimal',
		type: 'boolean',
		default: 'true',
		description: 'The input is decimal',
	},
	{
		name: 'max-fraction-digits',
		type: 'string | number',
		default: '',
		description: 'The maximum fraction digits of the input',
	},
	{
		name: 'data-cy',
		type: 'string',
		default: '',
		description: 'The data-cy of the input',
	},
]
</script>
