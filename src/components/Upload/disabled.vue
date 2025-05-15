<template>
	<SUpload
		v-model="modelValue"
		label="Disabled File Upload"
		disabled
		id="component-sicoco"
	>
	</SUpload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SUpload } from '@sutekitechid/sicoco-v3-next'

const modelValue = ref(undefined)
</script>
