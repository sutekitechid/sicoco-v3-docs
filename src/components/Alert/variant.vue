<template>
	<div class="flex flex-col gap-4 not-content">
		<SAlert variant="info">Info Alert</SAlert>
		<SAlert variant="success">Success Alert</SAlert>
		<SAlert variant="warning">Warning Alert</SAlert>
		<SAlert variant="danger">Danger Alert</SAlert>
		<SAlert variant="primary">Primary Alert</SAlert>
	</div>
</template>

<script setup>
import { SAlert } from '@sutekitechid/sicoco-v3-next'
</script>
