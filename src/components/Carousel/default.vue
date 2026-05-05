<script setup lang="ts">
import {
	SCarousel,
	SCarouselContent,
	SCarouselItem,
	SCarouselPagination,
} from '@sutekitechid/sicoco-v3-next'

const slides = [
	{ id: 1, title: 'Slide 1', bg: 'bg-primary-20', text: 'text-primary-90', description: 'Konten slide pertama' },
	{ id: 2, title: 'Slide 2', bg: 'bg-success-20', text: 'text-success-90', description: 'Konten slide kedua' },
	{ id: 3, title: 'Slide 3', bg: 'bg-warning-20', text: 'text-warning-90', description: 'Konten slide ketiga' },
	{ id: 4, title: 'Slide 4', bg: 'bg-danger-20', text: 'text-danger-90', description: 'Konten slide keempat' },
]
</script>

<template>
	<SCarousel :items-per-view="1" :loop="true" :gap="0">
		<SCarouselContent>
			<SCarouselItem v-for="slide in slides" :key="slide.id">
				<div
					:class="['h-48 rounded-xl flex flex-col items-center justify-center', slide.bg, slide.text]"
				>
					<p class="text-2xl font-bold">{{ slide.title }}</p>
					<p class="text-sm opacity-80">{{ slide.description }}</p>
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
						currentSnap === i - 1 ? 'w-4 bg-primary-70' : 'w-2 bg-neutral-30 hover:bg-neutral-50',
					]"
					:aria-label="`Ke slide ${i}`"
					@click="scrollTo(i - 1)"
				/>
			</template>
		</SCarouselPagination>
	</SCarousel>
</template>
