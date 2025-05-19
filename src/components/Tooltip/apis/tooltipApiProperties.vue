<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'

const data = [
	{
		name: 'trigger',
		type: 'string',
		description: 'Define the trigger event for the tooltip',
		values: ['click', 'hover', 'focus'],
		default: 'click',
	},
]
</script>
