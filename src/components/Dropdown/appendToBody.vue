<template>
	<div class="flex flex-col gap-6 not-content">
		<label>Append To Body</label>
		<SDropdown
			v-model="selectedAppendToBody"
			:append-to-body="true"
			placeholder="Append To Body"
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

const selectedAppendToBody = ref()
const dropdownOptions = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
]
</script>
