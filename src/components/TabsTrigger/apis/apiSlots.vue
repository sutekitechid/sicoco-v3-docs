<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup lang="ts">
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'default',
		description: 'Displays the content of the tab trigger',
	},
]
</script>
