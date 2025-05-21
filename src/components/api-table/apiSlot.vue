<template>
	<div>
		<STable class="rounded-none shadow-none w-full mb-5">
			<STableHeader
				class="border-b-1 text-grey-100 font-semibold !text-lg capitalize z-0"
			>
				<STableRow>
					<STableCell class="!px-4"> Name </STableCell>
					<STableCell class="!px-4"> Description </STableCell>
					<STableCell class="!px-4"> Props (if scoped) </STableCell>
				</STableRow>
			</STableHeader>
			<STableBody>
				<STableRow v-for="slot in slots" :key="slot.name">
					<STableCell class="!px-4">
						<SBadge variant="danger">
							{{ slot.name }}
						</SBadge>
					</STableCell>
					<STableCell class="!px-4">
						{{ slot.description }}
					</STableCell>
					<STableCell class="!px-4 !text-left">
						<template v-if="displayedProps(slot)">
							<SBadge v-for="prop in displayedProps(slot)" variant="danger">
								{{ prop }}
							</SBadge>
						</template>
					</STableCell>
				</STableRow>
			</STableBody>
		</STable>
	</div>
</template>

<script setup lang="ts">
import { defineProps, computed, type PropType } from 'vue'
import {
	STable,
	STableHeader,
	STableBody,
	STableRow,
	STableCell,
	SBadge,
} from '@sutekitechid/sicoco-v3-next'

const props = defineProps({
	slots: {
		type: Array as PropType<Record<string, any>>,
		default: () => [],
	},
})

const displayedProps = computed(() => {
	return (slot: Record<string, any>) => {
		if (slot.props) {
			if (typeof slot.props === 'string') {
				return [slot.props]
			}
			if (Array.isArray(slot.props)) {
				return slot.props
			}
		}
		return []
	}
})
</script>

<style lang="css">
table {
	@apply !table table-auto w-full;
}
</style>
