<template>
	<div id="component-sicoco">
		<p>Selected range: {{ selectedRangeDate }}</p>
		<SRangeCalendar v-model="selectedRangeDate" class="w-min" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SRangeCalendar } from '@sutekitechid/sicoco-v3-next'
import { getLocalTimeZone, today } from '@internationalized/date'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const selectedRangeDate = ref({
	start,
	end,
})
</script>
