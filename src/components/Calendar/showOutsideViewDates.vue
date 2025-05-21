<template>
	<div>
		<p>Calendar with showOutsideViewDates = false</p>
		<SCalendar
			v-model="selectedDate"
			:show-outside-view-dates="false"
			class="w-min not-content"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCalendar } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
</script>
