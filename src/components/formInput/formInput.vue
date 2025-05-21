<template>
	<SFormInput @submit="onSubmit">
		<SInput
			v-model="email"
			type="email"
			placeholder="Enter your email"
			required
		>
			<template #prefix>
				<i class="si-envelope"></i>
			</template>
		</SInput>

		<SInput
			v-model="password"
			type="password"
			placeholder="Enter your password"
			required
		>
			<template #prefix>
				<i class="si-lock"></i>
			</template>
		</SInput>

		<SInput
			v-model="confirmPassword"
			type="password"
			placeholder="Confirm your password"
			required
		>
			<template #prefix>
				<i class="si-lock"></i>
			</template>
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

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const { toast } = useToast()

const onSubmit = () => {
	if (password.value !== confirmPassword.value) {
		toast({
			title: 'Error',
			description: 'Passwords do not match',
			variant: 'danger',
			duration: 3000,
		})
		return
	}

	toast({
		title: 'Success',
		description: 'Form submitted successfully',
		variant: 'success',
		duration: 3000,
	})
}
</script>
