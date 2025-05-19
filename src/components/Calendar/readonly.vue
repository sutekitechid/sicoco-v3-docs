<template>
	<div id="component-sicoco">
		<p>Readonly Calendar</p>
		<SCalendar v-model="selectedDate" :readonly="true" class="w-min" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCalendar } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
</script>
