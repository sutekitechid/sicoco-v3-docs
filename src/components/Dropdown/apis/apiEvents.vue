<template>
	<ApiEventTable :events="data" />
</template>

<script setup>
import ApiEventTable from '@/components/api-table/apiEvent.vue'
const data = [
	{
		name: 'update:modelValue',
		description: 'Emitted when the dropdown value changes (use with v-model).',
		parameters: 'value: any',
	},
	{
		name: 'typing',
		description:
			'Emitted when the user types in the search input (use with @typing="onTyping"). Active when the searchable prop is true.',
		parameters: 'value: string',
	},
	{
		name: 'select',
		description:
			'Emitted when an option is selected or deselected (use with @select="onSelect").',
		parameters: 'event: $event',
	},
]
</script>
