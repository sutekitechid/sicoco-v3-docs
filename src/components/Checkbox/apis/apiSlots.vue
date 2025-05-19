<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
	{
		name: 'indicator',
		description: 'Change the appearance indicator of the checkbox',
		props: '',
	},
]
</script>
