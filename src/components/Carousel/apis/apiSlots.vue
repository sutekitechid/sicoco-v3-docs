<template>
	<ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
	{
		name: 'default',
		description: 'Konten utama carousel. Biasanya berisi CarouselContent dan CarouselPagination',
		props: '',
	},
]
</script>
