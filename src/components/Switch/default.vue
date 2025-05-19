<template>
	<div class="flex items-center gap-4" id="component-sicoco">
		<SSWitch v-model="checked">
			<span>Switch is: {{ checked ? 'On' : 'Off' }}</span>
		</SSWitch>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SSWitch } from '@sutekitechid/sicoco-v3-next'
const checked = ref(false)
</script>
