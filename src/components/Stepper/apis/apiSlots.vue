<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup lang="ts">
import ApiSlotTable from '@/components/api-table/apiSlot.vue'

const data = [
	{
		name: 'default',
		description: 'The main component that wraps the entire stepper.',
		props: [
			'modelValue: number',
			'totalSteps: number',
			'isNextDisabled: boolean',
			'isPrevDisabled: boolean',
			'isFirstStep: boolean',
			'isLastStep: boolean',
			'goToStep: (step: number) => void',
			'nextStep: () => void',
			'prevStep: () => void',
		],
	},
]
</script>
