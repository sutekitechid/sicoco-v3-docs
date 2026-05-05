<template>
	<div class="grid gap-4 md:grid-cols-2 not-content">
		<div class="rounded-lg border border-neutral-20 p-4">
			<div class="flex flex-col items-center justify-center">
				<SProgressCircle :model-value="progressValue" variant="success">
					<template #default="{ progress }">
						<span class="font-semibold text-neutral-100">{{ progress }}</span>
						<span class="mt-0.5 text-center text-xs text-neutral-60 font-medium"
							>Completed</span
						>
					</template>
				</SProgressCircle>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SProgressCircle } from '@sutekitechid/sicoco-v3-next'

const progressValue = ref(100)
</script>
