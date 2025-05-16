<template>
	<SButton @click="showToast">Show Toast</SButton>
</template>

<script setup>
import { SButton, useToast } from '@sutekitechid/sicoco-v3-next'

const { toast } = useToast()

function showToast() {
	toast({
		title: 'Hello World',
		description: 'This is a toast message',
	})
}
</script>
