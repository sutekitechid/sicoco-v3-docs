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
	{ id: 5, title: 'Slide 5', bg: 'bg-info-20', text: 'text-info-90' },
	{ id: 6, title: 'Slide 6', bg: 'bg-secondary-20', text: 'text-secondary-90' },
]
</script>

<template>
	<SCarousel orientation="vertical" :items-per-view="2" :gap="16" class="relative">
		<SCarouselContent class="h-64">
			<SCarouselItem v-for="slide in slides" :key="slide.id">
				<div
					:class="['h-28 rounded-xl flex items-center justify-center', slide.bg, slide.text]"
				>
					<p class="text-lg font-bold">{{ slide.title }}</p>
				</div>
			</SCarouselItem>
		</SCarouselContent>
		<SCarouselPagination class="mt-4 flex justify-center gap-2">
			<template #indicator="{ currentSnap, totalSnaps, scrollTo }">
				<button
					v-for="i in totalSnaps"
					:key="i"
					:class="[
						'h-2 rounded-full transition-all duration-200',
						currentSnap === i - 1 ? 'w-4 bg-primary-70' : 'w-2 bg-neutral-30',
					]"
					@click="scrollTo(i - 1)"
				/>
			</template>
		</SCarouselPagination>
	</SCarousel>
</template>
