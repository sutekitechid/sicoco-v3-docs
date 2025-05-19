<template>
	<div class="mt-4">
		<s-checkbox v-model="notChecked" value="not-checked"
			>Not Checked</s-checkbox
		>
		<s-checkbox checked checked-icon="si-check-double">Checked</s-checkbox>
		<s-checkbox v-model="notChecked" value="not-checked" disabled
			>Disabled Not Checked</s-checkbox
		>
		<s-checkbox checked rounded disabled>Checked Disabled</s-checkbox>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCheckbox } from '@sutekitechid/sicoco-v3-next'

const notChecked = ref()
</script>
