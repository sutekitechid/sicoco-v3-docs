<template>
	<div class="flex flex-wrap gap-2 items-center mt-4">
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button size="sm">Hover me! (Top)</s-button>
			</template>
			<s-tooltip-content position="top"> Top </s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button size="sm">Hover me! (Right)</s-button>
			</template>
			<s-tooltip-content position="right"> Right </s-tooltip-content>
		</s-tooltip>
	</div>
	<div class="flex flex-wrap gap-2 items-center">
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button size="sm">Hover me! (Left)</s-button>
			</template>
			<s-tooltip-content position="left"> Left </s-tooltip-content>
		</s-tooltip>
		<s-tooltip class="mt-4" trigger="hover">
			<template #trigger>
				<s-button size="sm">Hover me! (Bottom)</s-button>
			</template>
			<s-tooltip-content position="bottom"> Bottom </s-tooltip-content>
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
