<script setup lang="ts">
import {
	SCarousel,
	SCarouselContent,
	SCarouselItem,
	SCarouselPagination,
	SCarouselPaginationPrev,
	SCarouselPaginationNext,
} from '@sutekitechid/sicoco-v3-next'

const slides = [
	{ id: 1, title: 'Slide 1', bg: 'bg-primary-20', text: 'text-primary-90', description: 'Konten slide pertama' },
	{ id: 2, title: 'Slide 2', bg: 'bg-success-20', text: 'text-success-90', description: 'Konten slide kedua' },
	{ id: 3, title: 'Slide 3', bg: 'bg-warning-20', text: 'text-warning-90', description: 'Konten slide ketiga' },
	{ id: 4, title: 'Slide 4', bg: 'bg-danger-20', text: 'text-danger-90', description: 'Konten slide keempat' },
]
</script>

<template>
	<SCarousel :items-per-view="1" :loop="false" :gap="0" class="relative px-12">
		<SCarouselPaginationPrev class="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
		<SCarouselContent>
			<SCarouselItem v-for="slide in slides" :key="slide.id">
				<div
					:class="['h-48 rounded-xl flex flex-col items-center justify-center', slide.bg, slide.text]"
				>
					<p class="text-2xl font-bold">{{ slide.title }}</p>
					<p class="text-sm opacity-70">{{ slide.description }}</p>
				</div>
			</SCarouselItem>
		</SCarouselContent>
		<SCarouselPaginationNext class="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
		<SCarouselPagination class="mt-4 flex justify-center">
			<template #prev /><template #next />
			<template #indicator="{ currentSnap, totalSnaps, scrollTo }">
				<div class="flex gap-1.5">
					<button
						v-for="i in totalSnaps"
						:key="i"
						:class="[
							'h-1.5 rounded-full transition-all duration-300',
							currentSnap === i - 1 ? 'w-8 bg-primary-70' : 'w-2 bg-neutral-30',
						]"
						@click="scrollTo(i - 1)"
					/>
				</div>
			</template>
		</SCarouselPagination>
	</SCarousel>
</template>
