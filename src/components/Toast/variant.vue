<template>
	<div class="flex gap-2 flex-wrap" id="component-sicoco">
		<SButton
			variant="primary"
			@click="
				() =>
					toast({
						title: 'Primary',
						description: 'Primary action triggered',
						variant: 'primary',
					})
			"
		>
			Primary
		</SButton>
		<SButton
			variant="success"
			@click="
				() =>
					toast({
						title: 'Success',
						description: 'Operation successful',
						variant: 'success',
					})
			"
			>Success</SButton
		>
		<SButton
			variant="danger"
			@click="
				() =>
					toast({
						title: 'Error',
						description: 'Something went wrong',
						variant: 'danger',
					})
			"
			>Error</SButton
		>
		<SButton
			variant="warning"
			@click="
				() =>
					toast({
						title: 'Warning',
						description: 'Be careful',
						variant: 'warning',
					})
			"
			>Warning</SButton
		>
	</div>
</template>

<script setup>
import { SButton, SToaster, useToast } from '@sutekitechid/sicoco-v3-next'

const { toast } = useToast()
</script>
