<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'header',
		description: 'Slot for custom calendar header.',
		props: '',
	},
]
</script>
