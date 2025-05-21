<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
	{
		name: 'prefix',
		description: 'The prefix slot',
		props: '',
	},
	{
		name: 'suffix',
		description: 'The suffix slot',
		props: '',
	},
	{
		name: 'minLength',
		description: 'The slot of minLength error (text, email typed only)',
		props: '',
	},
	{
		name: 'required',
		description:
			'The slot of required error. You can input custom error required message with this prop.',
		props: '',
	},
	{
		name: 'minValue',
		description: 'The slot of minValue error (Number typed only).',
		props: '',
	},
	{
		name: 'maxValue',
		description: 'The slot of maxValue error (Number typed only)',
		props: '',
	},
	{
		name: 'exactLength',
		description: 'The slot of exactLength error (text, email type only)',
		props: '',
	},
	{
		name: 'email',
		description: 'Email error validation slot',
		props: '',
	},
	{
		name: 'url',
		description: 'Url error validation slot',
		props: '',
	},
	{
		name: 'errors',
		description: 'Custom errors slot',
		props: 'option: validation',
	},
]
</script>
