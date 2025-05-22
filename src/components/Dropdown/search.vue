<template>
	<div class="not-content">
		<div class="pb-2">
			<p>Value: {{ selectedOptionSearch }}</p>
			<p>Keyword: {{ searchValue }}</p>
		</div>
		<SDropdown
			v-model="selectedOptionSearch"
			class="w-full"
			placeholder="Choose an option"
			searchable
			@typing="handleTyping"
		>
			<SDropdownItem
				v-for="option in filteredOptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</SDropdownItem>
		</SDropdown>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { SDropdown, SDropdownItem } from '@sutekitechid/sicoco-v3-next'

const selectedOptionSearch = ref()
const searchValue = ref('')
const dropdownOptions = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
	{ label: 'Option 4', value: 4 },
]
const filteredOptions = computed(() =>
	dropdownOptions.filter((option) =>
		option.label.toLowerCase().includes(searchValue.value.toLowerCase())
	)
)
function handleTyping(value) {
	searchValue.value = value
}
</script>
