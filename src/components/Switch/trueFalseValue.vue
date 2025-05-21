<template>
	<div class="flex items-center gap-4 not-content">
		<SSWitch v-model="status" :true-value="'yes'" :false-value="'no'">
			<span>Status: {{ status }}</span>
		</SSWitch>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SSWitch } from '@sutekitechid/sicoco-v3-next'

const status = ref('no')
</script>
