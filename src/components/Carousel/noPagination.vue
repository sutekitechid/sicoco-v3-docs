<script setup lang="ts">
import {
	SCarousel,
	SCarouselContent,
	SCarouselItem,
} from '@sutekitechid/sicoco-v3-next'

const products = [
	{ id: 1, name: 'Produk A', price: 'Rp 150.000', image: 'https://placehold.co/300x200?text=Produk+A' },
	{ id: 2, name: 'Produk B', price: 'Rp 250.000', image: 'https://placehold.co/300x200?text=Produk+B' },
	{ id: 3, name: 'Produk C', price: 'Rp 350.000', image: 'https://placehold.co/300x200?text=Produk+C' },
	{ id: 4, name: 'Produk D', price: 'Rp 450.000', image: 'https://placehold.co/300x200?text=Produk+D' },
	{ id: 5, name: 'Produk E', price: 'Rp 550.000', image: 'https://placehold.co/300x200?text=Produk+E' },
]
</script>

<template>
	<SCarousel :items-per-view="3.5" :gap="16">
		<SCarouselContent>
			<SCarouselItem v-for="product in products" :key="product.id">
				<div class="border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
					<img :src="product.image" :alt="product.name" class="w-full object-cover" />
					<div class="p-3">
						<p class="font-semibold">{{ product.name }}</p>
						<p class="text-sm text-neutral-500">{{ product.price }}</p>
					</div>
				</div>
			</SCarouselItem>
		</SCarouselContent>
		<!-- Tanpa pagination - scroll bebas / drag -->
	</SCarousel>
</template>
