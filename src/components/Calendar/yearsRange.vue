<template>
	<div id="component-sicoco">
		<p>Calendar with Custom Years Range</p>
		<SCalendar v-model="selectedDate" :years-range="yearsRange" class="w-min" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCalendar } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
const yearsRange = [2000, 2030]
</script>
