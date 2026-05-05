<template>
	<div class="grid gap-4 md:grid-cols-2 not-content">
		<div
			v-for="item in progressItems"
			:key="item.variant"
			class="rounded-lg border border-neutral-20 p-4"
		>
			<p class="mb-3 text-sm font-medium text-neutral-100">
				{{ item.label }} Size
			</p>
			<div class="flex items-center justify-center">
				<SProgressCircle
					:model-value="progressValue"
					:diameter="item.diameter"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SProgressCircle } from '@sutekitechid/sicoco-v3-next'

const progressValue = ref(45)
const progressItems = [
	{ label: 'Small', diameter: '4rem' },
	{ label: 'Large', variant: '15rem' },
]
</script>
