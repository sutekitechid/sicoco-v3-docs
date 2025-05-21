<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const emit = defineEmits([
	'update:perPage',
	'update:page',
	'change-page',
	'change-per-page',
])

const data = [
	{
		name: 'update:perPage',
		description: 'Emitted when the per page value changes',
		parameters: 'perPage: number',
	},
	{
		name: 'update:page',
		description: 'Emitted when the page value changes',
		parameters: 'page: number',
	},
	{
		name: 'change-page',
		description: 'Emitted when the page value changes',
		parameters: 'page: number',
	},
	{
		name: 'change-per-page',
		description: 'Emitted when the per page value changes',
		parameters: 'perPage: number',
	},
]
</script>
