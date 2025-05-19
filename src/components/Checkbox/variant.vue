<template>
	<div class="flex flex-wrap gap-4 mt-4" id="component-sicoco">
		<s-checkbox v-model="type" value="Primary" variant="primary">
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
		<s-checkbox v-model="type" value="Primary" variant="primary light">
			Primary Light
		</s-checkbox>
		<s-checkbox v-model="type" value="Success" variant="success light">
			Success Light
		</s-checkbox>
		<s-checkbox v-model="type" value="Warning" variant="warning light">
			Warning Light
		</s-checkbox>
		<s-checkbox v-model="type" value="Danger" variant="danger light">
			Danger Light
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
