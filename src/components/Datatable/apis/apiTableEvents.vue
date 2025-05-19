<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
	{
		name: 'update:modelValue',
		description:
			'Emitted when the selected rows change (use with v-model="selectedRows").',
		parameters: 'value: any',
	},
	{
		name: 'change-page',
		description:
			'Emitted when the page changes (use with @change-page="onPageChange").',
		parameters: 'value: number',
	},
	{
		name: 'change-per-page',
		description:
			'Emitted when the number of items per page changes (use with @change-per-page="onPerPageChange").',
		parameters: 'value: number',
	},
	{
		name: 'sort',
		description: 'Emitted when the table is sorted (use with @sort="onSort").',
		parameters: 'id: string, desc: boolean',
	},
]
</script>
