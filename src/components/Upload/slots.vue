<template>
	<div class="flex flex-col gap-8">
		<div>
			<h5>Label Slot</h5>
			<SUpload v-model="modelValue" id="component-sicoco">
				<template #label>
					<div class="flex items-center gap-2 font-semibold text-xl ml-4">
						<i class="si-camera"></i>
						<span>Upload your file</span>
					</div>
				</template>
			</SUpload>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SUpload } from '@sutekitechid/sicoco-v3-next'
import { SButton } from '@sutekitechid/sicoco-v3-next'

const modelValue = ref()
</script>
