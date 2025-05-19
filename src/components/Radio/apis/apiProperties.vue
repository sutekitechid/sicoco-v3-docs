<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'value',
		type: ['string', 'number', 'booelan', 'object'],
		default: '',
		values: '',
		description: 'Value for radio button.',
	},
	{
		name: 'variant',
		type: 'string',
		default: 'default',
		values: ['default', 'primary', 'danger', 'warning', 'success'],
		description: 'Apply color variant to the checkbox.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Radio button disabled',
	},
]
</script>
