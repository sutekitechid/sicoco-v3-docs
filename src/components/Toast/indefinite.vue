<template>
	<SButton @click="showToast">Show Indefinite Toast</SButton>
</template>

<script setup>
import { SButton, useToast } from '@sutekitechid/sicoco-v3-next'

const { toast } = useToast()

function showToast() {
	toast({
		title: 'Indefinite Toast',
		description: 'This toast will stay until you close it',
		indefinite: true,
	})
}
</script>
