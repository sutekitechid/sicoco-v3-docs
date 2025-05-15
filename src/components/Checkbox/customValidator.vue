<template>
	<s-form-input @submit="onSubmit">
		<s-checkbox-group
			:value="payment"
			:custom-validators="{
				cash: value => {
					return !(payment === 'cash' && delivery !== 'cod')
				},
			}"
		>
			<p class="mt-3 text-xl">Select a delivery method:</p>
			<div>
				<div>
					<s-checkbox value="regular" v-model="delivery">
						<p>Regular</p>
					</s-checkbox>
				</div>
				<div>
					<s-checkbox value="instant" v-model="delivery">
						<p>Instant</p>
					</s-checkbox>
				</div>
				<div>
					<s-checkbox value="cod" v-model="delivery">
						<p>COD</p>
					</s-checkbox>
				</div>
			</div>

			<p class="mt-3 text-xl">Select a payment method:</p>
			<div>
				<div>
					<s-checkbox value="qris" v-model="payment">
						<p>QRIS</p>
					</s-checkbox>
				</div>
				<div>
					<s-checkbox value="bank" v-model="payment">
						<p>Bank Transfer</p>
					</s-checkbox>
				</div>
				<div>
					<s-checkbox value="cash" v-model="payment">
						<p>Cash</p>
					</s-checkbox>
				</div>
			</div>

			<template #errors="{ validation }">
				<div v-if="validation['cash']" class="text-danger-100">
					Cash can only be used for COD delivery.
				</div>
			</template>
			<s-button type="submit" data-cy="submit-button">SUBMIT</s-button>
		</s-checkbox-group>
	</s-form-input>
</template>

<script setup>
import { ref } from 'vue'
import {
	SCheckbox,
	SCheckboxGroup,
	SButton,
	SFormInput,
} from '@sutekitechid/sicoco-v3-next'

const delivery = ref()
const payment = ref() // Convert to string to store a single value.

const onSubmit = () => {
	console.log('submit')
}
</script>
