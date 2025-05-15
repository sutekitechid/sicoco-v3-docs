<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'label',
		description: 'Slot for custom label in the upload button.',
	},
]
</script>
