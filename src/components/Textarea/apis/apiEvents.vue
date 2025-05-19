<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
	{
		name: 'focus',
		description: 'The textarea is focused',
		parameters: 'event: $event',
	},
	{
		name: 'blur',
		description: 'The textarea is blurred',
		parameters: 'event: $event',
	},
	{
		name: 'input',
		description: 'The textarea is changed',
		parameters: 'value: string | number',
	},
]
</script>
