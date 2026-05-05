<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'modelValue',
		type: 'number',
		default: '0',
		description: 'Current progress value. Values are normalized between 0 and 100.',
		values: [],
	},
	{
		name: 'shape',
		type: 'string',
		default: "'circle'",
		description: 'Determines the shape of the progress indicator.',
		values: ['circle', 'semi-circle'],
	},
	{
		name: 'variant',
		type: 'string',
		default: "'primary'",
		description: 'Determines the color variant of the progress indicator.',
		values: ['primary', 'warning', 'danger', 'success', 'info'],
	},
	{
		name: 'diameter',
		type: 'string',
		default: "'11.25rem'",
		description: 'Sets the diameter of the progress circle.',
		values: [],
	},
	{
		name: 'class',
		type: 'string',
		default: '',
		description: 'Additional classes applied to the progress circle wrapper.',
		values: [],
	},
	{
		name: 'ariaLabel',
		type: 'string',
		default: "'Progress circle'",
		description: 'Accessible label for the progress circle element.',
		values: [],
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables the progress circle element.',
		values: [],
	},
	{
		name: 'strokeWidth',
		type: 'number',
		default: '8',
		description: 'Sets the stroke width of the progress circle.',
		values: [],
	},
	{
		name: 'dataCy',
		type: 'string',
		default: "'progress-circle'",
		description: 'Value used for data-cy test selectors.',
		values: [],
	},
]
</script>
