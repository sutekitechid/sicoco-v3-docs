<template>
	<div id="component-sicoco">
		<p>RangeCalendar with Important Dates {{ selectedRange }}</p>
		<SRangeCalendar
			v-model="selectedRangeDate"
			:important-dates="importantDates"
			class="w-min"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SRangeCalendar } from '@sutekitechid/sicoco-v3-next'
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const selectedRangeDate = ref({
	start,
	end,
})
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
		date: new CalendarDate(currentYear, currentMonth, 4),
		color: '#c30000',
		tooltip: 'Event 1',
	},
	{
		date: new CalendarDate(currentYear, currentMonth, 10),
		color: '#ffa800',
		tooltip: 'Event 2',
	},
	{
		date: new CalendarDate(currentYear, currentMonth, 10),
		color: '#c30000',
		tooltip: 'Event 2.2',
	},
	{
		date: new CalendarDate(currentYear, currentMonth, 15),
		color: '#2737c9',
		tooltip: 'Event 3',
	},
	{
		date: new CalendarDate(currentYear, currentMonth, 20),
		color: '#ffa800',
		tooltip: 'Event 4',
	},
	{
		date: new CalendarDate(currentYear, currentMonth, 25),
		color: '#2737c9',
		tooltip: 'Event 5',
	},
	{
		date: new CalendarDate(currentYear, currentMonth, 28),
		color: '#ffa800',
		tooltip: 'Event 6',
	},
]
</script>
