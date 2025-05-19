<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
	{
		name: 'trigger',
		description: 'Component that will trigger the tooltip',
		props: '',
	},
]
</script>
