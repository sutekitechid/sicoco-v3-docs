<template>
	<div class="flex gap-2 not-content">
		<s-badge variant="primary">Badge</s-badge>
		<s-badge variant="success">Badge</s-badge>
		<s-badge variant="warning">Badge</s-badge>
		<s-badge variant="danger">Badge</s-badge>
		<s-badge variant="dark-danger">Badge</s-badge>
		<s-badge variant="grey">Badge</s-badge>
		<s-badge variant="secondary">Badge</s-badge>
		<s-badge variant="purple">Badge</s-badge>
	</div>
</template>

<script lang="ts">
import { SButton, SBadge } from '@sutekitechid/sicoco-v3-next'

export default {
	components: {
		SButton,
		SBadge,
	},
}
</script>
