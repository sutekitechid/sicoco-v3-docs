<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const emit = defineEmits(['update:modelValue', 'change'])

const data = [
	{
		name: 'update:modelValue',
		description: 'Emitted when the per page value changes',
		parameters: 'perPage: number',
	},
	{
		name: 'change',
		description: 'Emitted when the per page value changes',
		parameters: 'perPage: number',
	},
]
</script>
