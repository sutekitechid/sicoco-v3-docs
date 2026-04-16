<script setup lang="ts">
import {
	SCarousel,
	SCarouselContent,
	SCarouselItem,
	SCarouselPagination,
} from '@sutekitechid/sicoco-v3-next'

const banners = [
	{ id: 1, src: 'https://placehold.co/1200x400/1a6cf7/white?text=Banner+1', alt: 'Banner 1' },
	{ id: 2, src: 'https://placehold.co/1200x400/22c55e/white?text=Banner+2', alt: 'Banner 2' },
	{ id: 3, src: 'https://placehold.co/1200x400/eab308/white?text=Banner+3', alt: 'Banner 3' },
]
</script>

<template>
	<SCarousel :items-per-view="1" :loop="true" :gap="0" :autoplay="3000">
		<SCarouselContent>
			<SCarouselItem v-for="banner in banners" :key="banner.id">
				<img :src="banner.src" :alt="banner.alt" class="w-full rounded-xl object-cover" />
			</SCarouselItem>
		</SCarouselContent>
		<SCarouselPagination class="mt-3 flex justify-center gap-2">
			<template #indicator="{ currentSnap, totalSnaps, scrollTo }">
				<button
					v-for="i in totalSnaps"
					:key="i"
					:class="[
						'h-2 rounded-full transition-all duration-200',
						currentSnap === i - 1 ? 'w-4 bg-primary-70' : 'w-2 bg-neutral-30 hover:bg-neutral-50',
					]"
					@click="scrollTo(i - 1)"
				/>
			</template>
		</SCarouselPagination>
	</SCarousel>
</template>
