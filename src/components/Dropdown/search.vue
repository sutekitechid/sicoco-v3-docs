<template>
	<div>
		<div
			style="display: flex; justify-content: space-between; align-items: center"
		>
			<div style="width: 50%" class="dropdown">
				<label for="search-dropdown">Choose an Option (Searchable):</label>
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
			<div style="width: 50%; text-align: center">
				<p>
					Option:
					{{
						selectedOptionSearch
							? selectedOptionSearch.label
							: 'No option selected'
					}}
				</p>
			</div>
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
			selectedOptionSearch: undefined,
			searchValue: '',
			dropdownOptions: [
				{ label: 'Option 1', value: 1 },
				{ label: 'Option 2', value: 2 },
				{ label: 'Option 3', value: 3 },
				{ label: 'Option 4', value: 4 },
			],
		}
	},
	computed: {
		filteredOptions() {
			return this.dropdownOptions.filter(option =>
				option.label.toLowerCase().includes(this.searchValue.toLowerCase())
			)
		},
	},
	methods: {
		handleTyping(value) {
			this.searchValue = value
		},
	},
}
</script>
