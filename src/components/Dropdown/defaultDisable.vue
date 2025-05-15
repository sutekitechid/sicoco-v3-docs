<template>
	<div class="dropdown">
		<div style="width: 50%">
			<label for="default-dropdown">Choose an Option (Default):</label>
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

		<div style="width: 50%">
			<label for="disabled-dropdown">Choose an Option (Disabled):</label>
			<SDropdown
				v-model="selectedOptionDisabled"
				placeholder="Choose an option"
				disabled
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
	</div>
</template>

<script>
import { SDropdown, SDropdownItem } from '@sutekitechid/sicoco-v3-next'
export default {
	components: {
		SDropdown,
		SDropdownItem,
	},
	data() {
		return {
			selectedOption: undefined,
			selectedOptionDisabled: undefined,
			dropdownOptions: [
				{ label: 'Option 1', value: 1 },
				{ label: 'Option 2', value: 2 },
				{ label: 'Option 3', value: 3 },
			],
		}
	},
}
</script>

<style>
.sl-markdown-content .dropdown div {
	@apply !mt-0;
}
</style>
