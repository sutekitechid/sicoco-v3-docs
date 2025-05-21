<template>
	<SUpload v-model="modelValue" label="Default File Upload" class="not-content">
	</SUpload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SUpload } from '@sutekitechid/sicoco-v3-next'

const modelValue = ref(undefined)
</script>
