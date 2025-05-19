<template>
	<div class="flex flex-col gap-6" id="component-sicoco">
		<label>Dropdown with Custom Trigger</label>
		<SDropdown
			v-model="selected"
			placeholder="Custom Trigger"
			ignore-active-item-value
		>
			<template #trigger>
				<SButton> Open Custom Dropdown </SButton>
			</template>
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
import { SButton, SDropdown, SDropdownItem } from '@sutekitechid/sicoco-v3-next'

const selected = ref(undefined)
const dropdownOptions = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
]
</script>
