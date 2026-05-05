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
		description:
			'Current progress value. Values are normalized between 0 and 100.',
		values: [],
	},
	{
		name: 'class',
		type: 'string',
		default: '',
		description: 'Additional classes applied to the progress wrapper.',
		values: [],
	},
	{
		name: 'variant',
		type: 'string',
		default: "'primary'",
		description: 'Determines the color variant of the progress indicator.',
		values: ['primary', 'warning', 'danger', 'success', 'info'],
	},
	{
		name: 'size',
		type: 'string',
		default: "'0.5rem'",
		description: 'Sets the height of the progress track.',
		values: [],
	},
	{
		name: 'showTooltip',
		type: 'boolean',
		default: 'false',
		description: 'Displays a tooltip with the current progress value.',
		values: [],
	},
	{
		name: 'ariaLabel',
		type: 'string',
		default: "'Progress'",
		description: 'Accessible label for the progress element.',
		values: [],
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables the progress element.',
		values: [],
	},
	{
		name: 'dataCy',
		type: 'string',
		default: "'progress'",
		description: 'Value used for data-cy test selectors.',
		values: [],
	},
]
</script>
