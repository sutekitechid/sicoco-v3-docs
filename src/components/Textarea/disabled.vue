<template>
	<s-textarea
		v-model="input"
		class="mt-4"
		placeholder="Enter your text here"
		maxlength="30"
		minlength="5"
		disabled
	/>
</template>

<script setup>
import { ref } from 'vue'
import { STextarea } from '@sutekitechid/sicoco-v3-next'

const input = ref('')
</script>
