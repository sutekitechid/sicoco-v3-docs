<template>
	<div id="component-sicoco">
		<p>Selected range: {{ start }} - {{ end }}</p>
		<SDatePicker v-model:start="start" v-model:end="end" :date-range="true" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SDatePicker } from '@sutekitechid/sicoco-v3-next'

const start = ref(null)
const end = ref(null)
</script>
