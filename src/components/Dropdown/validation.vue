<template>
	<SFormInput class="flex gap-4 pb-4" id="component-sicoco">
		<SDropdown
			v-model="selectedOption"
			class="w-full"
			placeholder="Choose an option"
			required
			:custom-validators="{ value: value => value === 3 }"
		>
			<SDropdownItem
				v-for="option in dropdownOptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</SDropdownItem>
			<template #required>
				<p>Required</p>
			</template>
			<template #errors="{ validation }">
				<p v-if="validation.value.$invalid">Value Should be 3</p>
			</template>
		</SDropdown>

		<SButton type="submit">Submit</SButton>
	</SFormInput>
</template>

<script setup>
import { ref } from 'vue'
import {
	SDropdown,
	SDropdownItem,
	SFormInput,
	SButton,
} from '@sutekitechid/sicoco-v3-next'

const selectedOption = ref()
const dropdownOptions = [
	{ label: 'Choose an option', value: undefined },
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
]
</script>
