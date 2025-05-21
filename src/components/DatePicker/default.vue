<template>
	<div id="component-sicoco">
		<p>Selected date: {{ selectedDate }}</p>
		<SDatePicker v-model="selectedDate" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SDatePicker } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
</script>
