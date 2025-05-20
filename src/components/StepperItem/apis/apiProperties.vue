<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const props = defineProps({
	class: {
		type: String,
		default: '',
	},
	step: {
		type: Number,
		required: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	stepsCount: {
		type: Number,
		required: true,
	},
})

const data = [
	{
		name: 'class',
		type: 'string',
		default: '',
		values: '',
		description: 'The CSS class to apply to the stepper item component.',
	},
	{
		name: 'step',
		type: 'number',
		default: '',
		values: '',
		description: '(required) The step number of the stepper item',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		values: '',
		description:
			'If true, the stepper item will be disabled and not clickable.',
	},
	{
		name: 'completed',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'If true, the stepper item will be marked as completed.',
	},
	{
		name: 'stepsCount',
		type: 'number',
		default: '',
		values: '',
		description: '(required) The total number of steps in the stepper.',
	},
]
</script>
