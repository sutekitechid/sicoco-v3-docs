<template>
	<div class="not-content">
		<p>Selected time: {{ time }}</p>
		<STimePicker v-model="time" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { STimePicker } from '@sutekitechid/sicoco-v3-next'

const time = ref(null)
</script>
