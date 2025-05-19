<template>
	<div class="flex flex-col gap-6" id="component-sicoco">
		<div>
			<label>Scrollable Dropdown</label>
			<SDropdown
				v-model="selectedScrollable"
				:scrollable="true"
				placeholder="Scrollable"
			>
				<SDropdownItem
					v-for="option in manyOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.label }}
				</SDropdownItem>
			</SDropdown>
		</div>

		<div>
			<label>Not Scrollable Dropdown</label>
			<SDropdown
				v-model="selectedScrollable"
				placeholder="Not Scrollable"
				:scrollable="false"
			>
				<SDropdownItem
					v-for="option in manyOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.label }}
				</SDropdownItem>
			</SDropdown>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SDropdown, SDropdownItem } from '@sutekitechid/sicoco-v3-next'

const selectedScrollable = ref()
const manyOptions = Array.from({ length: 20 }, (_, i) => ({
	label: `Option ${i + 1}`,
	value: i + 1,
}))
</script>
