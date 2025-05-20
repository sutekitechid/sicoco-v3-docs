<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
	{
		name: 'focus',
		description: 'The input is focused',
		parameters: 'event: $event',
	},
	{
		name: 'blur',
		description: 'The input is blurred',
		parameters: 'event: $event',
	},
	{
		name: 'keypress',
		description: 'The key is pressed',
		parameters: 'event: $event',
	},
	{
		name: 'keydown',
		description: 'The key is pressed down',
		parameters: 'event: $event',
	},
	{
		name: 'input',
		description: 'The input is changed',
		parameters: 'value: string | number',
	},
	{
		name: 'paste',
		description: 'The input is pasted',
		parameters: 'event: $event',
	},
	{
		name: 'select',
		description: 'The input is selected',
		parameters: 'event: $event',
	},
	{
		name: 'mouseup',
		description: 'The mouse is released',
		parameters: 'event: $event',
	},
	{
		name: 'keyup',
		description: 'The key is released',
		parameters: 'event: $event',
	},
]
</script>
