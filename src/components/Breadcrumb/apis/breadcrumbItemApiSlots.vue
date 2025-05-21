<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'default',
		description: 'Slot for custom content inside the breadcrumb item.',
	},
]
</script>
