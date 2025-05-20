<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'class',
		type: 'string',
		default: '',
		values: '',
		description: 'The CSS class to apply to the stepper component.',
	},
	{
		name: 'modelValue',
		type: 'number',
		default: 'null',
		values: '',
		description:
			'The current value of the stepper. This is a two-way binding property.',
	},
	{
		name: 'defaultValue',
		type: 'number',
		default: '0',
		values: '',
		description: 'The default value of the stepper.',
	},
	{
		name: 'linear',
		type: 'boolean',
		default: 'true',
		values: '',
		description:
			'If true, the stepper will only allow moving to the next step if the current step is valid.',
	},
	{
		name: 'orientation',
		type: 'string',
		default: 'horizontal',
		values: ['horizontal', 'vertical'],
		description: 'The orientation of the stepper',
	},
	{
		name: 'fullWidth',
		type: 'boolean',
		default: 'true',
		values: '',
		description:
			'If true, the stepper will take up the full width of its container.',
	},
]
</script>
