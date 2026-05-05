<script setup lang="ts">
import {
	SCarousel,
	SCarouselContent,
	SCarouselItem,
	SCarouselPagination,
} from '@sutekitechid/sicoco-v3-next'

const slides = [
	{ id: 1, title: 'Slide 1', bg: 'bg-primary-20', text: 'text-primary-90' },
	{ id: 2, title: 'Slide 2', bg: 'bg-success-20', text: 'text-success-90' },
	{ id: 3, title: 'Slide 3', bg: 'bg-warning-20', text: 'text-warning-90' },
	{ id: 4, title: 'Slide 4', bg: 'bg-danger-20', text: 'text-danger-90' },
]
</script>

<template>
	<SCarousel :items-per-view="1" :loop="false" :gap="0">
		<SCarouselContent>
			<SCarouselItem v-for="slide in slides" :key="slide.id">
				<div
					:class="['h-48 rounded-xl flex flex-col items-center justify-center', slide.bg, slide.text]"
				>
					<p class="text-2xl font-bold">{{ slide.title }}</p>
				</div>
			</SCarouselItem>
		</SCarouselContent>
		<SCarouselPagination class="mt-4 flex justify-center gap-3">
			<template #indicator="{ currentSnap, totalSnaps }">
				<span class="text-sm font-medium text-neutral-600 min-w-[3rem] text-center">
					{{ currentSnap + 1 }} / {{ totalSnaps }}
				</span>
			</template>
		</SCarouselPagination>
	</SCarousel>
</template>
