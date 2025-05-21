<template>
	<div class="not-content">
		<STimePicker v-model="time" :disabled="true" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { STimePicker } from '@sutekitechid/sicoco-v3-next'

const time = ref(null)
</script>
