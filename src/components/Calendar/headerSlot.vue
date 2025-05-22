<template>
	<div>
		<p>Calendar with Custom Header Slot</p>
		<SCalendar v-model="selectedDate" class="w-min not-content">
			<template #header>
				<div class="mb-2 flex w-full items-center justify-between">
					<SButton
						rounded
						outlined
						@click="handlePrevMonth"
						class="w-7 h-7 p-1"
					>
						<i class="si-chevron-left"></i>
					</SButton>
					<p class="font-semibold">
						{{ getMonthYear() }}
					</p>
					<SButton
						rounded
						outlined
						@click="handleNextMonth"
						class="w-7 h-7 p-1"
					>
						<i class="si-chevron-right"></i>
					</SButton>
				</div>
			</template>
		</SCalendar>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCalendar, SButton } from '@sutekitechid/sicoco-v3-next'
import { CalendarDate } from '@internationalized/date'

const selectedDate = ref(new CalendarDate(2023, 10, 1))

function handleNextMonth() {
	selectedDate.value = selectedDate.value.add({ months: 1 })
}
function handlePrevMonth() {
	selectedDate.value = selectedDate.value.add({ months: -1 })
}
function getMonthYear() {
	return selectedDate.value.toDate('UTC').toLocaleString('default', {
		month: 'long',
		year: 'numeric',
	})
}
</script>
