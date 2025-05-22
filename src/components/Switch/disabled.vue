<template>
	<div class="flex items-center gap-4 not-content">
		<SSWitch v-model="checked" :disabled="true">
			<span>Disabled Switch</span>
		</SSWitch>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SSWitch } from '@sutekitechid/sicoco-v3-next'

const checked = ref(false)
</script>
