<template>
	<div>
		<!-- Trigger button for the long content modal -->
		<SButton @click="isModalVisible = true">Open Long Content Dialog</SButton>

		<!-- Long Content Modal -->
		<SDialog v-model:open="isModalVisible">
			<SDialogContent class="max-w-none w-fit">
				<div
					class="max-h-96 overflow-y-auto p-12"
					style="background-color: #f5f5f5"
				>
					<p v-for="i in 50" :key="i" style="color: black">
						This is line {{ i }} of content.
					</p>
					<br />
				</div>
				<SButton @click="isModalVisible = false">Close</SButton>
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
			isModalVisible: false,
		}
	},
}
</script>
