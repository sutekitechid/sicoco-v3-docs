<template>
	<div class="flex flex-col gap-6 not-content">
		<p>Value: {{ date }}</p>
		<div>
			<p>Format: {{ DateFormatEnum.STANDARD }}</p>
			<SDatePicker
				v-model="date"
				:format-date="DateFormatEnum.STANDARD"
				placeholder="05-05-2025"
			/>
		</div>
		<div>
			<p>Format: {{ DateFormatEnum.SHORT }}</p>
			<SDatePicker
				v-model="date"
				:format-date="DateFormatEnum.SHORT"
				placeholder="10/05/2025"
			/>
		</div>
		<div>
			<p>Format: {{ DateFormatEnum.WITH_MONTH_NAME }}</p>
			<SDatePicker
				v-model="date"
				:format-date="DateFormatEnum.WITH_MONTH_NAME"
				placeholder="15 Maret 2025"
			/>
		</div>
		<div>
			<p>Format: {{ DateFormatEnum.WITH_SHORT_MONTH_NAME }}</p>
			<SDatePicker
				v-model="date"
				:format-date="DateFormatEnum.WITH_SHORT_MONTH_NAME"
				placeholder="20 Mar 2025"
			/>
		</div>
		<div>
			<p>Format: {{ DateFormatEnum.FULL }}</p>
			<SDatePicker
				v-model="date"
				:format-date="DateFormatEnum.FULL"
				placeholder="Kamis, 25 Maret 2025"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SDatePicker } from '@sutekitechid/sicoco-v3-next'
import { CalendarDate } from '@internationalized/date'

const now = new Date()
const currentDate = now.getDate()
const currentMonth = now.getMonth() + 1
const currentYear = now.getFullYear()
const date = ref(new CalendarDate(currentYear, currentMonth, currentDate))
enum DateFormatEnum {
	STANDARD = 'standard',
	SHORT = 'short',
	WITH_MONTH_NAME = 'with-month-name',
	WITH_SHORT_MONTH_NAME = 'with-short-month-name',
	FULL = 'full',
}
</script>
