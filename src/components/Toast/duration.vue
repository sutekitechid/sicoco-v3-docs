<template>
	<SButton @click="showToast">Show Toast (5s)</SButton>
</template>

<script setup>
import { SButton, useToast } from '@sutekitechid/sicoco-v3-next'

const { toast } = useToast()

function showToast() {
	toast({
		title: 'Custom Duration',
		description: 'This toast will disappear after 5 seconds',
		duration: 5000,
	})
}
</script>
