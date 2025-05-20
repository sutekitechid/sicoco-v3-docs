<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup lang="ts">
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'trigger',
		description: 'Container for the trigger button.',
	},
	{
		name: 'label',
		description: 'Container for the label of the stepper item.',
	},
]
</script>
