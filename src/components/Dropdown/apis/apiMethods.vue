<template>
	<ApiMethodTable :methods="data" />
</template>

<script setup>
import ApiMethodTable from '@/components/api-table/apiMethod.vue'
const data = [
	{
		name: 'openDropdown',
		description:
			'Open the dropdown programmatically (e.g., dropdownRef.value.openDropdown()).',
		parameters: '',
		return: '',
	},
	{
		name: 'closeDropdown',
		description:
			'Close the dropdown programmatically (e.g., dropdownRef.value.closeDropdown()).',
		parameters: '',
		return: '',
	},
]
</script>
