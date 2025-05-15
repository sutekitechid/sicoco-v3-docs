<template>
	<div
		style="display: flex; justify-content: space-between; align-items: center"
	>
		<div style="width: 50%" class="dropdown">
			<label for="multiple-dropdown">Choose an Option (Multiple):</label>
			<SDropdown
				v-model="selectedOptions"
				class="w-full"
				placeholder="Choose options"
				multiple
				@typing="handleTyping"
			>
				<SDropdownItem
					v-for="option in dropdownOptions"
					:key="option.value"
					:value="option"
				>
					{{ option.label }}
				</SDropdownItem>
			</SDropdown>
		</div>
		<div style="width: 50%; text-align: center">
			<p>
				Selected Options (Multiple):
				{{
					selectedOptions
						? selectedOptions.map(option => option.label).join(', ')
						: 'No options selected'
				}}
			</p>
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
			selectedOptions: [],
			dropdownOptions: [
				{ label: 'Option 1', value: 1 },
				{ label: 'Option 2', value: 2 },
				{ label: 'Option 3', value: 3 },
			],
		}
	},
}
</script>
