<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
	{
		name: 'default',
		description: 'Main slot for dropdown list options.',
		props: '',
	},
	{
		name: 'trigger',
		description: 'Optional slot for a custom trigger button.',
		props: 'open, modelValue, invalid',
	},
	{
		name: 'required',
		description: 'Slot for required validation message.',
		props: 'validation',
	},
	{
		name: 'errors',
		description:
			'Slot for other error messages (active if customValidators is set).',
		props: 'validation',
	},
]
</script>
