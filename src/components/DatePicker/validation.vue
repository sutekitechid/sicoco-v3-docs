<template>
	<SFormInput id="component-sicoco">
		<SDatePicker
			v-model="selectedDate"
			:required="true"
			:custom-validators="{ isToday }"
		>
			<template #required> Date is required </template>
			<template #errors="{ validation }">
				<p v-if="validation.isToday?.$invalid">Should be today</p>
			</template>
		</SDatePicker>
		<div class="pt-10">
			<SButton type="submit">Submit</SButton>
		</div>
	</SFormInput>
</template>

<script setup>
import { ref } from 'vue'
import { SDatePicker, SFormInput, SButton } from '@sutekitechid/sicoco-v3-next'

const selectedDate = ref(null)
function isToday(value) {
	if (!value) return true
	const [day, month, year] = value.split('-').map(Number)
	const today = new Date()
	return (
		day === today.getDate() &&
		month === today.getMonth() + 1 &&
		year === today.getFullYear()
	)
}
</script>
