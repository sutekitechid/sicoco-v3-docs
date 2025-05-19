<template>
	<s-form-input class="mt-3" @submit="onSubmit">
		<s-checkbox-group required>
			<s-checkbox v-model="input" value="Primary" required>
				<p>Accept Terms and Conditions</p>
			</s-checkbox>
			<template #required>
				<p class="text-red-90">Checkbox must be checked.</p>
			</template>
		</s-checkbox-group>
		<s-button type="submit">SUBMIT</s-button>
	</s-form-input>
</template>

<script setup>
import { ref } from 'vue'
import {
	SCheckboxGroup,
	SCheckbox,
	SFormInput,
	SButton,
} from '@sutekitechid/sicoco-v3-next'

const input = ref()

const onSubmit = () => {
	console.log('submit', input.value)
}
</script>
