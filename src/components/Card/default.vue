<template>
	<div class="bg-slate-200 p-2 mb-4">
		<SCard class="rounded-md not-content">
			<SCardHeader>
				<div class="flex items-center gap-3">
					<div class="w-2 h-6 rounded-sm bg-red-700"></div>
					<h3 class="font-semibold text-sm leading-[22px]">Greeting Dev</h3>
				</div>
			</SCardHeader>
			<SCardContent class="flex justify-center"
				><p>Hello World!</p></SCardContent
			>
		</SCard>
	</div>
</template>

<script setup>
import { SCard, SCardContent, SCardHeader } from '@sutekitechid/sicoco-v3-next'
</script>
