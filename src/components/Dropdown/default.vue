<template>
	<div id="component-sicoco">
		<p>Value : {{ selectedOption }}</p>
		<SDropdown
			v-model="selectedOption"
			class="w-full"
			placeholder="Choose an option"
		>
			<SDropdownItem
				v-for="option in dropdownOptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</SDropdownItem>
		</SDropdown>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SDropdown, SDropdownItem } from '@sutekitechid/sicoco-v3-next'

const selectedOption = ref()
const dropdownOptions = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
]
</script>
