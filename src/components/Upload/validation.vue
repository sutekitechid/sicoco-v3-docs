<template>
	<div class="pb-4">
		<SUpload
			v-model="modelValue"
			label="Validation File Upload"
			:file-types="['image/jpeg', 'image/jpg', 'image/png']"
			:max-size="1 * 1000 * 1000"
			required
			class="not-content"
		>
			<template #required>
				<p>Please select a file to upload.</p>
			</template>
			<template #maxSize>
				<p>The file size must not exceed 1 MB.</p>
			</template>
			<template #fileType>
				<p>Only JPG and PNG image files are allowed.</p>
			</template>
		</SUpload>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SUpload } from '@sutekitechid/sicoco-v3-next'

const modelValue = ref(undefined)
</script>
