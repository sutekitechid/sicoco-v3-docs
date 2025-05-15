<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'modelValue',
		type: 'File',
		default: 'undefined',
		values: '',
		description: 'The file bound to the component (v-model).',
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Whether the file input is required.',
	},
	{
		name: 'customValidators',
		type: 'Record<string, any>',
		default: '{}',
		values: '',
		description: 'Custom validators for the file upload.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Disable the file input.',
	},
	{
		name: 'label',
		type: 'string',
		default: "''",
		values: '',
		description: 'Label for the file input.',
	},
	{
		name: 'maxSize',
		type: 'number',
		default: 'undefined',
		values: '',
		description: 'Maximum file size (in bytes).',
	},
	{
		name: 'class',
		type: 'string',
		default: "''",
		values: '',
		description: 'Additional CSS classes.',
	},
	{
		name: 'fileTypes',
		type: 'string[]',
		default: 'undefined',
		values: '',
		description: 'Allowed file types (e.g., ["image/png", "application/pdf"]).',
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Make the file input read-only.',
	},
]
</script>
