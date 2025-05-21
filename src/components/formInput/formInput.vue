<template>
	<SFormInput @submit="onSubmit">
		<SInput v-model="input" placeholder="Type your name..." required>
			<template #prefix>
				<i class="si-user"></i>
			</template>
			<template #required> Please fill your name </template>
		</SInput>

		<SButton type="submit">Submit</SButton>
	</SFormInput>
	<SToaster position="bottom" />
</template>

<script setup>
import {
	SFormInput,
	SInput,
	SToaster,
	useToast,
	SButton,
} from '@sutekitechid/sicoco-v3-next'

import { ref } from 'vue'

const input = ref('')
const { toast } = useToast()

const onSubmit = () => {
	toast({
		title: 'Hello ' + input.value,
		description: 'Submitted successfully',
		variant: 'success',
		duration: 3000,
	})
}
</script>
