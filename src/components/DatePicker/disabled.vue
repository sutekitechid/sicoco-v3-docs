<template>
	<div id="component-sicoco">
		<p>Disabled DatePicker</p>
		<SDatePicker v-model="selectedDate" disabled />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SDatePicker } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
</script>
