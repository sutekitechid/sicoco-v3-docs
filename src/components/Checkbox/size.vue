<template>
	<div class="flex flex-wrap gap-4 mt-4" id="component-sicoco">
		<s-checkbox v-model="type" value="sm" size="sm"> Small </s-checkbox>
		<s-checkbox v-model="type" value="md" size="md"> Medium </s-checkbox>
		<s-checkbox v-model="type" value="lg" size="lg"> Large </s-checkbox>
		<s-checkbox v-model="type" value="xl" size="xl"> Extra Large </s-checkbox>
		<s-checkbox v-model="type" value="2xl" size="2xl">
			Extra Large 2
		</s-checkbox>
		<s-checkbox v-model="type" value="3xl" size="3xl">
			Extra Large 3
		</s-checkbox>
		<s-checkbox v-model="type" value="4xl" size="4xl">
			Extra Large 4
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
