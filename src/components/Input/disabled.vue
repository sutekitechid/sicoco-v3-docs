<template>
	<s-input
		v-model="input"
		type="text"
		disabled
		data-cy="input-disabled"
		placeholder="John Doe"
	/>
</template>

<script setup>
import { ref } from 'vue'
import { SInput } from '@sutekitechid/sicoco-v3-next'

const input = ref('')
</script>
