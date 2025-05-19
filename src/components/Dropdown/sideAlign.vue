<template>
	<div class="flex flex-col gap-6" id="component-sicoco">
		<div>
			<label>Dropdown Side: Top</label>
			<SDropdown v-model="selectedTop" side="top" placeholder="Top">
				<SDropdownItem
					v-for="option in dropdownOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.label }}
				</SDropdownItem>
			</SDropdown>
		</div>
		<div>
			<label>Dropdown Side: Right</label>
			<SDropdown v-model="selectedRight" side="right" placeholder="Right">
				<SDropdownItem
					v-for="option in dropdownOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.label }}
				</SDropdownItem>
			</SDropdown>
		</div>
		<div>
			<label>Dropdown Side: Bottom (default)</label>
			<SDropdown v-model="selectedBottom" side="bottom" placeholder="Bottom">
				<SDropdownItem
					v-for="option in dropdownOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.label }}
				</SDropdownItem>
			</SDropdown>
		</div>
		<div>
			<label>Dropdown Side: Left</label>
			<SDropdown v-model="selectedLeft" side="left" placeholder="Left">
				<SDropdownItem
					v-for="option in dropdownOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.label }}
				</SDropdownItem>
			</SDropdown>
		</div>
		<div>
			<label>Dropdown Align: Start</label>
			<SDropdown
				v-model="selectedAlignStart"
				align="start"
				placeholder="Align Start"
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
		<div>
			<label>Dropdown Align: Center (default)</label>
			<SDropdown
				v-model="selectedAlignCenter"
				align="center"
				placeholder="Align Center"
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
		<div>
			<label>Dropdown Align: End</label>
			<SDropdown v-model="selectedAlignEnd" align="end" placeholder="Align End">
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

<script setup>
import { ref } from 'vue'
import { SDropdown, SDropdownItem } from '@sutekitechid/sicoco-v3-next'

const selectedTop = ref()
const selectedRight = ref()
const selectedBottom = ref()
const selectedLeft = ref()
const selectedAlignStart = ref()
const selectedAlignCenter = ref()
const selectedAlignEnd = ref()
const dropdownOptions = [
	{ label: 'Option 1 lorem ipsum color amet', value: 1 },
	{ label: 'Option 2 lorem ipsum color amet', value: 2 },
	{ label: 'Option 3 lorem ipsum color amet', value: 3 },
]
</script>
