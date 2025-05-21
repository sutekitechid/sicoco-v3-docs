<template>
	<div class="not-content">
		<p>DatePicker with Important Dates</p>
		<SDatePicker v-model="selectedDate" :important-dates="importantDates" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { CalendarDate } from '@internationalized/date'
import { SDatePicker } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
const now = new Date()
const currentMonth = now.getMonth() + 1
const currentYear = now.getFullYear()

const importantDates = [
	{
		date: new CalendarDate(currentYear, currentMonth, 5),
		color: '#c30000',
		tooltip: 'Event 1',
	},
	{
		date: new CalendarDate(currentYear, currentMonth, 10),
		color: '#ffa800',
		tooltip: 'Event 2',
	},
]
</script>
