<template>
	<SFormInput class="not-content">
		<STimePicker v-model="time" :custom-validators="{ isMorning }">
			<template #required> Time is required </template>
			<template #errors="{ validation }">
				<p v-if="validation.isMorning?.$invalid">
					Time must be in the morning (before 12:00)
				</p>
			</template>
		</STimePicker>
		<div class="pt-10">
			<SButton type="submit">Submit</SButton>
		</div>
	</SFormInput>
</template>

<script setup>
import { ref } from 'vue'
import { STimePicker, SFormInput, SButton } from '@sutekitechid/sicoco-v3-next'
const time = ref(null)
function isMorning(value) {
	if (!value) return true
	const hour =
		value.hour ??
		(typeof value === 'string' ? Number(value.split(':')[0]) : null)
	return hour !== null && hour < 12
}
</script>
