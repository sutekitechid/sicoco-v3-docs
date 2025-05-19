<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
	{
		name: 'select',
		description:
			'Emitted when this dropdown item is selected (clicked). Payload: the value of the item (props.value).',
		parameters: 'value: any',
	},
]
</script>
