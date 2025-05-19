<template>
	<div class="flex flex-wrap gap-2 items-center mt-4">
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button size="sm">Hover me!</s-button>
			</template>
			<s-tooltip-content position="left">by hover</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="click">
			<template #trigger>
				<s-button size="sm">Click me!</s-button>
			</template>
			<s-tooltip-content position="top">by click</s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="focus">
			<template #trigger>
				<s-button size="sm">Focus</s-button>
			</template>
			<s-tooltip-content position="right">by focus</s-tooltip-content>
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
