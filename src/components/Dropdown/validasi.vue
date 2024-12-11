<template>
	<SFormInput class="dropdown">
		<SDropdown
			v-model="data.enrollment_path"
			placeholder="Please select an enrollment path"
			required
		>
			<SDropdownItem
				v-for="path in admissionPaths"
				:key="path.id"
				:value="path.id"
			>
				{{ path.name }}
			</SDropdownItem>
			<template #required>
				<div>Please select an enrollment path</div>
			</template>
		</SDropdown>

		<s-button type="submit">Submit</s-button>
	</SFormInput>
</template>

<script>
import {
	SDropdown,
	SDropdownItem,
	SFormInput,
	SButton,
} from '@sutekitechid/sicoco-v3-next'

export default {
	components: {
		SDropdown,
		SDropdownItem,
		SFormInput,
		SButton,
	},
	data() {
		return {
			data: {
				enrollment_path: undefined,
			},
			admissionPaths: [
				{ id: 1, name: 'Path 1' },
				{ id: 2, name: 'Path 2' },
				{ id: 3, name: 'Path 3' },
			],
			errorMessage: '',
		}
	},
}
</script>
