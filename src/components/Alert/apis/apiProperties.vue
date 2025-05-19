<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'variant',
		type: 'string',
		default: "'info'",
		values: ['info', 'success', 'warning', 'danger', 'primary'],
		description: 'Visual style of the alert.',
	},
	{
		name: 'closable',
		type: 'boolean',
		default: 'true',
		values: '',
		description: 'Whether the alert can be closed by the user.',
	},
	{
		name: 'bordered',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Display the alert with a border.',
	},
	{
		name: 'outlined',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Display the alert with an outlined style.',
	},
	{
		name: 'hasIcon',
		type: 'boolean',
		default: 'true',
		values: '',
		description: 'Show an icon in the alert.',
	},
]
</script>
