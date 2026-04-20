<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'open',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Controlled open state of the dialog',
	},
	{
		name: 'closeOnClickOutside',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Whether the dialog should close when clicking outside of it',
	}
]
</script>
