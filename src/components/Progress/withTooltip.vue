<template>
	<div class="grid gap-4">
		<div
			v-for="item in progressItems"
			:key="item.label"
			class="rounded-lg border border-neutral-20 p-4"
		>
			<p class="mb-2 text-sm font-medium text-neutral-100 dark:text-white">
				{{ item.value }}%
			</p>
			<SProgress :model-value="item.value" show-tooltip="true" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SProgress } from '@sutekitechid/sicoco-v3-next'

const progressItems = [
	{ value: 5, variant: 'primary' },
	{ value: 25, variant: 'primary' },
	{ value: 50, variant: 'primary' },
	{ value: 75, variant: 'primary' },
	{ value: 100, variant: 'primary' },
]
</script>
