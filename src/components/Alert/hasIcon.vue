<template>
	<div class="flex flex-col gap-4" id="component-sicoco">
		<SAlert>Alert with Icon</SAlert>
		<SAlert id="alert-icon" :has-icon="false" :closable="false"
			>Alert without Icon</SAlert
		>
	</div>
</template>

<script setup>
import { SAlert } from '@sutekitechid/sicoco-v3-next'
</script>

<style scoped>
/* should not use this, there is a bug in sicoco-v3-shadcn */
.sl-markdown-content #alert-icon :is(i) {
	display: none;
}
</style>
