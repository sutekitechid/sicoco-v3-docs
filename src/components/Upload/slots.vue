<template>
	<div class="flex flex-col gap-8">
		<div>
			<h5>Label Slot</h5>
			<SUpload v-model="modelValue" id="component-sicoco">
				<template #label>
					<div class="flex items-center gap-2 font-semibold text-xl ml-4">
						<i class="si-camera dark:text-neutral-10 text-neutral-100"></i>
						<span class="dark:text-neutral-10 text-neutral-100"
							>Upload your file</span
						>
					</div>
				</template>
			</SUpload>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SUpload } from '@sutekitechid/sicoco-v3-next'

const modelValue = ref()
</script>
