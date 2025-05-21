<template>
	<div id="component-sicoco">
		<p>DatePicker with Custom Years Range</p>
		<SDatePicker v-model="selectedDate" :years-range="yearsRange" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SDatePicker } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
const yearsRange = [2020, 2026]
</script>
