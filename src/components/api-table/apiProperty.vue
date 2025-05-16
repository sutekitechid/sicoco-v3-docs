<template>
	<div>
		<STable class="rounded-none shadow-none w-full mb-5">
			<STableHeader
				class="border-b-1 text-grey-100 font-semibold !text-lg capitalize z-0"
			>
				<STableRow>
					<STableCell class="!px-4"> Name </STableCell>
					<STableCell class="!px-4"> Description </STableCell>
					<STableCell class="!px-4"> Type </STableCell>
					<STableCell class="!px-4"> Values </STableCell>
					<STableCell class="!px-4"> Default </STableCell>
				</STableRow>
			</STableHeader>
			<STableBody>
				<STableRow
					v-for="property in properties"
					:key="property.name"
					class="border-b-0"
				>
					<STableCell class="!px-4">
						<SBadge variant="danger">
							{{ property.name }}
						</SBadge>
					</STableCell>
					<STableCell class="!px-4">
						{{ property.description }}
					</STableCell>
					<STableCell class="!px-4">
						<SBadge variant="danger">
							{{ property.type }}
						</SBadge>
					</STableCell>
					<STableCell class="!px-4">
						<SBadge
							v-for="value in property.values"
							:key="value"
							variant="danger"
						>
							{{ value }}
						</SBadge>
					</STableCell>
					<STableCell class="!px-4 !text-left">
						<SBadge v-if="property.default" variant="danger">
							{{ property.default }}
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
	SBadge,
	STable,
	STableBody,
	STableCell,
	STableHeader,
	STableRow,
} from '@sutekitechid/sicoco-v3-next'

const props = defineProps({
	properties: {
		type: Array,
		default: () => [],
	},
})
</script>
