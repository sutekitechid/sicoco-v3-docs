<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'class',
		type: 'string',
		default: "''",
		values: '',
		description: 'Additional CSS classes for the root element of the switch.',
	},
	{
		name: 'modelValue',
		type: 'boolean | string',
		default: 'false',
		values: '',
		description:
			'The current value of the switch for two-way binding (v-model).',
	},
	{
		name: 'trueValue',
		type: 'boolean | string',
		default: 'true',
		values: '',
		description: 'The value considered as "checked".',
	},
	{
		name: 'falseValue',
		type: 'boolean | string',
		default: 'false',
		values: '',
		description: 'The value considered as "unchecked".',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		values: '',
		description: 'Determines if the switch is disabled.',
	},
	{
		name: 'variant',
		type: 'string',
		default: "'primary'",
		values: [
			'primary',
			'success',
			'warning',
			'danger',
			'gray/grey',
			'secondary',
		],
		description: 'The variant of the switch, which determines the color.',
	},
]
</script>
