<template>
	<div class="not-content">
		<s-form-input @submit="onSubmit">
			<s-textarea v-model="input" placeholder="Enter your text here" required />
			<s-button type="submit">SUBMIT</s-button>
		</s-form-input>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SFormInput, SButton, STextarea } from '@sutekitechid/sicoco-v3-next'

const input = ref('')

const onSubmit = () => {
	console.log('submit')
}
</script>
