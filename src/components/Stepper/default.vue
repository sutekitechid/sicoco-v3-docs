<template>
	<SStepper v-model="step" data-cy="our-stepper">
		<SStepperItem
			v-for="(item, index) in steps"
			:key="item.step"
			:step="item.step"
			:steps-count="steps.length"
			:data-cy="`our-stepper-item-${index + 1}`"
		>
			<template #trigger>
				<SStepperTrigger :data-cy="`our-stepper-item-trigger-${index + 1}`">
					<SStepperIndicator>
						{{ index + 1 }}
					</SStepperIndicator>
				</SStepperTrigger>
			</template>

			<template #label>
				<div
					class="top-full left-0 w-full group-data-[state=inactive]:text-neutral-100"
				>
					<SStepperTitle class="text-left">
						{{ item.title }}
					</SStepperTitle>
					<SStepperDescription class="text-left">
						{{ item.description }}
					</SStepperDescription>
				</div>
			</template>
		</SStepperItem>
	</SStepper>
</template>

<script setup lang="ts">
import { SStepper } from '@sutekitechid/sicoco-v3-next'
import {
	SStepperDescription,
	SStepperIndicator,
	SStepperItem,
	SStepperTitle,
	SStepperTrigger,
} from '@sutekitechid/sicoco-v3-next/dist/components/stepper'

import { ref } from 'vue'

const steps = [
	{
		step: 1,
		title: 'Address',
		description: 'Add your address here',
	},
	{
		step: 2,
		title: 'Shipping',
		description: 'Set your preferred shipping method',
	},
	{
		step: 3,
		title: 'Checkout',
		description: 'Confirm your order',
	},
]

const step = ref(2)
</script>
