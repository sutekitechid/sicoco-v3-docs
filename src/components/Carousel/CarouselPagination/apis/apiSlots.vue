<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
	{
		name: 'default',
		description: 'Scoped slot yang menyediakan semua controls dan state carousel untuk custom layout pagination',
		props: '{ scrollPrev: () => void, scrollNext: () => void, hasPrev: boolean, hasNext: boolean, currentSnap: number, totalSnaps: number, scrollTo: (index: number) => void }',
	},
	{
		name: 'indicator',
		description: 'Scoped slot khusus untuk render custom indicator',
		props: '{ currentSnap: number, totalSnaps: number, scrollTo: (index: number) => void }',
	},
	{
		name: 'prev',
		description: 'Slot untuk custom previous button. Kosongkan slot ini jika ingin menyembunyikan default prev button',
		props: '',
	},
	{
		name: 'next',
		description: 'Slot untuk custom next button. Kosongkan slot ini jika ingin menyembunyikan default next button',
		props: '',
	},
]
</script>
