<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'position',
		type: 'string',
		description: 'Position of the tooltip',
		values: ['top', 'bottom', 'left', 'right'],
		default: '',
	},
	{
		name: 'variant',
		type: 'string',
		description: 'Variant of the tooltip',
		values: [
			'default',
			'primary',
			'success',
			'warning',
			'danger',
			'black',
			'white',
		],
		default: 'default',
	},
]
</script>
