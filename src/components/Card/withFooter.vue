<template>
	<div class="bg-slate-200 p-2 mb-4">
		<SCard class="rounded-md">
			<SCardHeader>
				<div class="flex items-center gap-3">
					<div class="w-2 h-6 rounded-sm bg-red-700"></div>
					<h3 class="font-semibold text-sm leading-[22px] component-sicoco">
						Greeting
					</h3>
				</div>
			</SCardHeader>
			<SCardContent class="component-sicoco flex justify-center"
				><p>Annyeonghaseyo!</p></SCardContent
			>
			<SCardFooter class="flex justify-between px-6 pb-6 component-sicoco">
				<SButton> Cancel </SButton>
				<SButton>Submit</SButton>
			</SCardFooter>
		</SCard>
	</div>
</template>

<script setup>
import {
	SCard,
	SCardDescription,
	SCardContent,
	SCardHeader,
	SCardFooter,
	SButton,
} from '@sutekitechid/sicoco-v3-next'
</script>

<style>
.component-sicoco {
	@apply !mt-0;
}
</style>
