<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'model-value',
		type: 'string | number',
		default: '',
		description: 'Binding untuk current snap index. Bisa digunakan untuk membuat controlled carousel',
		values: undefined,
	},
	{
		name: 'items-per-view',
		type: 'number',
		default: '1',
		description: 'Jumlah item yang ditampilkan per view. Bisa menggunakan nilai desimal (misal 1.5, 3.5) untuk menampilkan sebagian item berikutnya',
		values: [],
	},
	{
		name: 'gap',
		type: 'number',
		default: '0',
		description: 'Jarak antar item carousel dalam pixel',
		values: [],
	},
	{
		name: 'loop',
		type: 'boolean',
		default: 'false',
		description: 'Mengaktifkan mode loop infinite. Ketika sampai di slide terakhir, akan kembali ke slide pertama',
		values: [],
	},
	{
		name: 'orientation',
		type: 'string',
		default: 'horizontal',
		description: 'Orientasi carousel',
		values: ['horizontal', 'vertical'],
	},
	{
		name: 'autoplay',
		type: 'number | boolean',
		default: 'false',
		description: 'Mengaktifkan autoplay. Nilai number menentukan delay dalam milidetik (misal 3000 untuk 3 detik)',
		values: [],
	},
	{
		name: 'pause-on-hover',
		type: 'boolean',
		default: 'true',
		description: 'Pause autoplay ketika user hover/focus pada carousel',
		values: [],
	},
	{
		name: 'opts',
		type: 'object',
		default: '{}',
		description: 'Opsi tambahan untuk Embla Carousel (align, containScroll, dragFree, dll). Lihat dokumentasi Embla Carousel untuk opsi lengkap',
		values: [],
	},
]
</script>
