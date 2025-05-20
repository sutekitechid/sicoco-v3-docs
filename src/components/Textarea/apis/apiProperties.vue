<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'v-model',
		type: ['array', 'string', 'boolean', 'number', 'object'],
		default: '',
		description: 'Binding values',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: false,
		description: 'Disable checkbox',
	},
	{
		name: 'required',
		type: 'boolean',
		default: false,
		description: 'Checkbox validation is required',
	},
	{
		name: 'minlength',
		type: 'number',
		default: '',
		description: 'Minimum character count',
	},
	{
		name: 'maxlength',
		type: 'number',
		default: '',
		description: 'Maximum character count',
	},
	{
		name: 'rows',
		type: 'number',
		default: '',
		description: 'Number of rows',
	},
	{
		name: 'cols',
		type: 'number',
		default: '',
		description: 'Number of cols',
	},
	{
		name: 'placeholder',
		type: 'String',
		default: '',
		description: 'Textarea label',
	},
]
</script>
