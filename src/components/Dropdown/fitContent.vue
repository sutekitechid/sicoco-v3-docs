<template>
	<div class="flex flex-col gap-6" id="component-sicoco">
		<label>Fit Content</label>
		<SDropdown
			v-model="selectedFitContent"
			:fit-content="true"
			placeholder="Fit Content"
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

const selectedFitContent = ref()
const dropdownOptions = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
]
</script>
