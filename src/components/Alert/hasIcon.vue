<template>
	<div class="flex flex-col gap-4 not-content">
		<SAlert>Alert with Icon</SAlert>
		<SAlert id="alert-icon" :has-icon="false" :closable="false"
			>Alert without Icon</SAlert
		>
	</div>
</template>

<script setup>
import { SAlert } from '@sutekitechid/sicoco-v3-next'
</script>
