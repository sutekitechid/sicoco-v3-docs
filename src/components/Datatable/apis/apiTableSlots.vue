<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'default',
		description: 'Required slot for the table content.',
		props: '',
	},
	{
		name: 'footer',
		description: 'Slot for the table footer.',
		props: '',
	},
	{
		name: 'loading-infinite-scroll',
		description: 'Slot for the loading state of infinite scroll.',
		props: 'validation',
	},
	{
		name: 'empty',
		description: 'Slot for the empty state of the table.',
		props: '',
	},
]
</script>
