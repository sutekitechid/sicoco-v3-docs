<template>
	<div class="rounded-lg border border-neutral-20 p-4">
		<p class="mb-3 text-sm font-medium text-neutral-100">Semi Circle</p>
		<div class="flex items-center justify-center">
			<SProgressCircle :model-value="progressValue" shape="semi-circle">
				<template #default="{ progress }">
					<span class="mb-0.5 text-center text-xs text-neutral-60 font-medium"
						>Processing</span
					>
					<span class="font-semibold text-neutral-100">{{ progress }}</span>
				</template>
			</SProgressCircle>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SProgressCircle } from '@sutekitechid/sicoco-v3-next'

const progressValue = ref(45)
</script>
