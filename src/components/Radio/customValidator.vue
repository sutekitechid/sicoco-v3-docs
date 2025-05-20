<template>
	<s-form-input @submit="onSubmit">
		<p class="mt-3 text-xl">Choose what you want to drink?</p>

		<SRadioGroup
			:custom-validators="{
				cold: (value) => {
					return !(temperature === 'cold' && drink !== 'tea')
				},
			}"
			v-model="drink"
		>
			<SRadioGroupItem value="tea" type="primary"> Tea </SRadioGroupItem>
			<SRadioGroupItem value="coffee" type="primary"> Coffee </SRadioGroupItem>
		</SRadioGroup>

		<p class="mt-3 text-xl">Do you want a cold or hot drink?</p>

		<SRadioGroup
			:custom-validators="{
				cold: (value) => {
					return !(temperature === 'cold' && drink !== 'tea')
				},
			}"
			v-model="temperature"
		>
			<SRadioGroupItem value="hot" type="primary"> Hot </SRadioGroupItem>
			<SRadioGroupItem value="cold" type="primary"> Cold </SRadioGroupItem>
		</SRadioGroup>

		<template #errors="{ validation }">
			<div v-if="validation['cold']" class="text-danger-100">
				Sorry, but the cold coffee menu is not available!
			</div>
		</template>
		<s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
	</s-form-input>
</template>

<script setup>
import { ref } from 'vue'
import {
	SRadioGroupItem,
	SRadioGroup,
	SButton,
	SFormInput,
} from '@sutekitechid/sicoco-v3-next'

const drink = ref('')
const temperature = ref('') // Convert to string to store a single value.

const onSubmit = () => {
	console.log('submit')
}
</script>
