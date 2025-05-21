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
		description: 'The class name of the tabs',
	},
	{
		name: 'defaultValue',
		type: 'string | number',
		default: '',
		values: '',
		description:
			'The default value of the currently selected tab. This prop is used to set the initial selected tab when the component is mounted.',
	},
	{
		name: 'modelValue',
		type: 'string | number',
		default: '',
		values: '',
		description:
			'The value of the currently selected tab. This prop is used to control the selected tab programmatically.',
	},
	{
		name: 'variant',
		type: 'string',
		default: 'default',
		values: ['default', 'boxes'],
		description:
			'The variant of the tabs. Can be used to apply different styles to the tabs.',
	},
]
</script>
