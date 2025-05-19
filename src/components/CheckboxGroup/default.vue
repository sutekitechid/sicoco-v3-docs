<template>
	<div class="mt-4">
		<s-checkbox-group :value="selectedOptions">
			<s-checkbox v-model="selectedOptions" value="option1"
				><p>Option 1</p></s-checkbox
			>
			<s-checkbox v-model="selectedOptions" value="option2"
				>Option 2</s-checkbox
			>
			<s-checkbox v-model="selectedOptions" value="option3"
				>Option 3</s-checkbox
			>
			<s-checkbox v-model="selectedOptions" value="option4"
				>Option 4</s-checkbox
			>
		</s-checkbox-group>

		<p>Selected: {{ selectedOptions }}</p>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCheckboxGroup, SCheckbox } from '@sutekitechid/sicoco-v3-next'

const selectedOptions = ref([])
</script>

<style>
.sl-markdown-content label {
	@apply !mt-0;
}
</style>
