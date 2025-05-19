<template>
	<s-form-input @submit="onSubmit">
		<SCheckboxGroup class="mt-3" :value="input" required>
			<s-checkbox v-model="input" value="Primary" required>
				<p>Accept Terms and Conditions</p>
			</s-checkbox>
			<template #required>
				<p class="text-red-90">Checkbox must be checked.</p>
			</template>
		</SCheckboxGroup>
		<s-button type="submit">SUBMIT</s-button>
	</s-form-input>
</template>

<script setup>
import { ref } from 'vue'
import {
	SCheckbox,
	SFormInput,
	SButton,
	SCheckboxGroup,
} from '@sutekitechid/sicoco-v3-next'

const input = ref()

const onSubmit = () => {
	console.log('submit')
}
</script>
