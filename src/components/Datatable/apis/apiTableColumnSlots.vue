<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'default',
		description: 'Required slot for the table content.',
		props: 'row: Object, index: number',
	},
	{
		name: 'header',
		description: 'Slot for the table header.',
		props: 'index: number',
	},
]
</script>
