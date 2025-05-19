<template>
	<div id="component-sicoco">
		<p>Selected date: {{ selectedDate }}</p>
		<SCalendar
			v-model="selectedDate"
			class="w-min"
			id="component-sicoco"
			:years-range="[2000, 2030]"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCalendar } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
</script>
