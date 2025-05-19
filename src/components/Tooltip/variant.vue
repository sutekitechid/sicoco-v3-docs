<template>
	<div class="flex flex-wrap gap-2 items-center">
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button size="sm">Hover me!</s-button>
			</template>
			<s-tooltip-content position="top" variant="default">
				Default
			</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button size="sm">Hover me!</s-button>
			</template>
			<s-tooltip-content position="top" variant="primary">
				Primary
			</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button variant="danger" size="sm">Hover me!</s-button>
			</template>
			<s-tooltip-content position="top" variant="danger">
				Danger
			</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button variant="warning" size="sm">Hover me!</s-button>
			</template>
			<s-tooltip-content position="top" variant="warning">
				Warning
			</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button variant="success" size="sm">Hover me!</s-button>
			</template>
			<s-tooltip-content position="top" variant="success">
				Success
			</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button
					class="bg-black hover:bg-white hover:text-black"
					variant="default"
					size="sm"
					>Hover me!</s-button
				>
			</template>
			<s-tooltip-content position="top" variant="black">
				Black
			</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button
					class="bg-white text-black outline hover:bg-black hover:text-white"
					variant="default"
					size="sm"
					>Hover me!</s-button
				>
			</template>
			<s-tooltip-content position="top" variant="white">
				White
			</s-tooltip-content>
		</s-tooltip>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import {
	STooltip,
	STooltipContent,
	SButton,
} from '@sutekitechid/sicoco-v3-next'
</script>
