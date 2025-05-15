<template>
	<div>
		<SButton @click="isModalVisible = true">Open Image Dialog</SButton>

		<SDialog v-model:open="isModalVisible">
			<SDialogContent class="max-w-none w-fit">
				<div style="width: 640px; max-width: 100%">
					<img
						src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/12/22/732885074.jpg"
						alt="Image Placeholder"
						style="width: 100%; max-width: 1000px; height: auto"
					/>
					<div
						class="profile-info"
						style="padding: 15px; background-color: #f5f5f5"
					>
						<p
							style="
								text-align: left;
								margin-top: 20px;
								margin-bottom: 20px;
								color: black;
							"
						>
							Cats, in Latin, Felis silvestris catus, are a type of carnivore.
							The word "cat" usually refers to a "cat" that has been
							domesticated, but can also refer to "big cats" such as lions,
							tigers, and leopards.
						</p>
					</div>
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
