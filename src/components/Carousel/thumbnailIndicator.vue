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
	{ id: 4, src: 'https://placehold.co/1200x400/eab308/white?text=Banner+4', alt: 'Banner 4' },
	{ id: 5, src: 'https://placehold.co/1200x400/eab308/white?text=Banner+5', alt: 'Banner 5' },
	{ id: 6, src: 'https://placehold.co/1200x400/eab308/white?text=Banner+6', alt: 'Banner 6' },
	{ id: 7, src: 'https://placehold.co/1200x400/eab308/white?text=Banner+7', alt: 'Banner 7' },
	{ id: 8, src: 'https://placehold.co/1200x400/eab308/white?text=Banner+8', alt: 'Banner 8' },
	{ id: 9, src: 'https://placehold.co/1200x400/eab308/white?text=Banner+9', alt: 'Banner 9' },
]
</script>

<template>
	<SCarousel :items-per-view="1" :loop="true" :gap="0">
		<SCarouselContent>
			<SCarouselItem v-for="banner in banners" :key="banner.id">
				<img :src="banner.src" :alt="banner.alt" class="w-full rounded-xl object-cover" />
			</SCarouselItem>
		</SCarouselContent>
		<SCarouselPagination class="mt-3 flex justify-center gap-2">
			<template #default="{ scrollPrev, scrollNext, scrollTo, currentSnap }">
				<div class="mt-4">
					<div class="mb-4">
						<SCarousel :items-per-view="3.5" :loop="false" :gap="16" :model-value="currentSnap">
							<SCarouselContent>
								<SCarouselItem v-for="(banner, index) in banners" :key="banner.id" @click="scrollTo(index)">
									<img :src="banner.src" :alt="banner.alt" :class="['w-64', '!h-24', 'rounded-xl', 'object-cover', { 'border-4 border-primary-100': currentSnap === index }]" />
								</SCarouselItem>
							</SCarouselContent>
						</SCarousel>
					</div>
					<div class="flex gap-2 justify-end">
						<button @click="scrollPrev" class="p-2 bg-gray-200 rounded">
							<i class="si-icon si-chevron-left"></i>
						</button>
						<button @click="scrollNext" class="p-2 bg-gray-200 rounded">
							<i class="si-icon si-chevron-right"></i>
						</button>
					</div>
				</div>
			</template>
		</SCarouselPagination>
	</SCarousel>
</template>
