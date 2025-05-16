<template>
	<div class="mt-4">
		<SRadioGroup
			class="flex flex-wrap gap-4"
			v-model="variant"
			id="component-sicoco"
		>
			<SRadioGroupItem value="1" class="flex items-center">
				Value 1
			</SRadioGroupItem>
			<SRadioGroupItem value="2" class="flex items-center" disabled>
				Value 2
			</SRadioGroupItem>
			<SRadioGroupItem value="3" class="flex items-center">
				Value 3
			</SRadioGroupItem>
		</SRadioGroup>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SRadioGroupItem, SRadioGroup } from '@sutekitechid/sicoco-v3-next'

const variant = ref('')
</script>

<style>
.sl-markdown-content label {
	@apply !mt-0;
}
</style>
