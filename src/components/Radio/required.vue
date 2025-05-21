<template>
	<div class="not-content">
		<s-form-input @submit="onSubmit">
			<s-radio-group required v-model="input" class="mt-3">
				<s-radio-group-item value="1"> CLICK </s-radio-group-item>

				<template #required>
					<p class="text-red-90">Radio Button must be clicked!!</p>
				</template>

				<div>
					<s-button type="submit">SUBMIT</s-button>
				</div>
			</s-radio-group>
		</s-form-input>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import {
	SRadioGroupItem,
	SRadioGroup,
	SFormInput,
	SButton,
} from '@sutekitechid/sicoco-v3-next'

const input = ref()

const onSubmit = () => {
	console.log('submit')
}
</script>

<style>
.sl-markdown-content label {
	@apply !mt-0;
}
</style>
