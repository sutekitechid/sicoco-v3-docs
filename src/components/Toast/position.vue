<template>
	<div class="flex gap-2 flex-wrap" id="component-sicoco">
		<SButton @click="show('top')">Top</SButton>
		<SButton @click="show('bottom')">Bottom</SButton>
		<SToaster :position="position" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SButton, SToaster, useToast } from '@sutekitechid/sicoco-v3-next'

const { toast } = useToast()
const position = ref<'top' | 'bottom'>('bottom')

function show(payload: 'top' | 'bottom') {
	position.value = payload
	toast({
		title: `Toast at ${payload.replace('-', ' ')}`,
		description: `This toast is shown at the ${payload.replace('-', ' ')}`,
		duration: 1000,
	})
}
</script>
