<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'required',
		description: 'Slot for required validation message.',
		props: '',
	},
	{
		name: 'errors',
		description: 'Slot for displaying custom validation errors.',
		props: 'validation',
	},
]
</script>
