<template>
	<div>
		<STable class="rounded-none shadow-none w-full mb-5">
			<STableHeader
				class="border-b-1 text-grey-100 font-semibold !text-lg capitalize z-0"
			>
				<STableRow>
					<STableCell class="!px-4"> Name </STableCell>
					<STableCell class="!px-4"> Description </STableCell>
					<STableCell class="!px-4"> Parameters </STableCell>
					<STableCell class="!px-4"> Return </STableCell>
				</STableRow>
			</STableHeader>
			<STableBody>
				<STableRow v-for="method in methods" :key="method.name">
					<STableCell class="!px-4">
						<SBadge variant="danger">
							{{ method.name }}
						</SBadge>
					</STableCell>
					<STableCell class="!px-4">
						{{ method.description }}
					</STableCell>
					<STableCell class="!px-4">
						<SBadge v-if="method.parameters" variant="danger">
							{{ method.parameters }}
						</SBadge>
					</STableCell>
					<STableCell class="!px-4 !text-left">
						<SBadge v-if="method.return" variant="danger">
							{{ method.return }}
						</SBadge>
					</STableCell>
				</STableRow>
			</STableBody>
		</STable>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
import {
	STable,
	STableHeader,
	STableBody,
	STableRow,
	STableCell,
	SBadge,
} from '@sutekitechid/sicoco-v3-next'

const props = defineProps({
	methods: {
		type: Array,
		default: () => [],
	},
})
</script>

<style lang="css">
table {
	@apply !table table-auto w-full;
}
</style>
