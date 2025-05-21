<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'required',
		description: 'Slot for custom required message.',
	},
	{
		name: 'maxLength',
		description: 'Slot for custom label in the upload button.',
	},
]
</script>
