<template>
	<div class="bg-slate-200 p-2 mb-4">
		<SCard class="rounded-md">
			<SCardHeader>
				<div class="flex items-center gap-3">
					<div class="w-2 h-6 rounded-sm bg-red-700"></div>
					<h3 class="font-semibold text-sm leading-[22px] component-sicoco">
						Greeting Dev
					</h3>
				</div>
			</SCardHeader>
			<SCardContent class="component-sicoco flex justify-center"
				><p>Hello World!</p></SCardContent
			>
		</SCard>
	</div>
</template>

<script setup>
import { SCard, SCardContent, SCardHeader } from '@sutekitechid/sicoco-v3-next'
</script>

<style>
.component-sicoco {
	@apply !mt-0;
}
</style>
