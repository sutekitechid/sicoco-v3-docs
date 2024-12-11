<template>
	<div class="flex flex-wrap gap-4">
		<s-checkbox v-model="type" value="Primary" variant="primary" class="mt-4">
			Primary
		</s-checkbox>
		<s-checkbox v-model="type" value="Success" variant="success">
			Success
		</s-checkbox>
		<s-checkbox v-model="type" value="Warning" variant="warning">
			Warning
		</s-checkbox>
		<s-checkbox v-model="type" value="Danger" variant="danger">
			Danger
		</s-checkbox>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCheckbox } from '@sutekitechid/sicoco-v3-next'

const type = ref([])
</script>

<style>
.sl-markdown-content label {
	@apply !mt-0;
}
</style>
