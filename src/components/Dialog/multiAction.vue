<template>
	<div>
		<!-- Trigger button for the multi-action modal -->
		<SButton @click="dialogOpened = true">Open Multi-Action Modal</SButton>

		<SDialog v-model:open="dialogOpened">
			<SDialogContent class="text-black text-center w-[400px]">
				<div class="flex flex-col gap-2 justify-center">
					<div
						class="rounded-full h-12 w-12 flex items-center justify-center bg-success-100/10 m-auto"
					>
						<div
							class="rounded-full h-9 w-9 flex items-center justify-center bg-success-100/20"
						>
							<i class="si-check-circle text-success-100 h-4 w-4"></i>
						</div>
					</div>
					<h2 class="text-xl font-bold">Successfull</h2>
					<p class="text-neutral-60 text-sm">
						This blog post has been published. Team members will be able to edit
						this post and republish changes.
					</p>
					<div class="flex gap-4">
						<SButton outlined @click="dialogOpened = false" class="w-full"
							>Batal</SButton
						>
						<SButton class="w-full">Confirm</SButton>
					</div>
				</div>
			</SDialogContent>
		</SDialog>
	</div>
</template>

<script>
import { SButton, SDialog, SDialogContent } from '@sutekitechid/sicoco-v3-next'

export default {
	components: {
		SButton,
		SDialog,
		SDialogContent,
	},
	data() {
		return {
			dialogOpened: false,
		}
	},
}
</script>
