<template>
	<SUpload
		v-model="modelValue"
		label="Readonly File Upload"
		readonly
		id="component-sicoco"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SUpload } from '@sutekitechid/sicoco-v3-next'

const modelValue = ref(undefined)
</script>
