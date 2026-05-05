<template>
	<div class="grid gap-4 md:grid-cols-2">
		<div class="rounded-lg border border-neutral-20 p-4">
			<p class="mb-2 text-sm font-medium text-neutral-100 dark:text-white">
				Primary: {{ progressValue }}%
			</p>
			<SProgress :model-value="progressValue" variant="primary" />
		</div>
		<div class="rounded-lg border border-neutral-20 p-4">
			<p class="mb-2 text-sm font-medium text-neutral-100 dark:text-white">
				Warning: {{ progressValue }}%
			</p>
			<SProgress :model-value="progressValue" variant="warning" />
		</div>
		<div class="rounded-lg border border-neutral-20 p-4">
			<p class="mb-2 text-sm font-medium text-neutral-100 dark:text-white">
				Danger: {{ progressValue }}%
			</p>
			<SProgress :model-value="progressValue" variant="danger" />
		</div>
		<div class="rounded-lg border border-neutral-20 p-4">
			<p class="mb-2 text-sm font-medium text-neutral-100 dark:text-white">
				Success: {{ progressValue }}%
			</p>
			<SProgress :model-value="progressValue" variant="success" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SProgress } from '@sutekitechid/sicoco-v3-next'

const progressValue = ref(45)
</script>
