<template>
	<div class="flex gap-2 flex-wrap" id="component-sicoco">
		<s-badge closable variant="primary">Badge</s-badge>
		<s-badge closable variant="success">Badge</s-badge>
		<s-badge closable variant="warning">Badge</s-badge>
		<s-badge closable variant="danger">Badge</s-badge>
		<s-badge closable variant="dark-danger">Badge</s-badge>
		<s-badge closable variant="grey">Badge</s-badge>
		<s-badge closable variant="secondary">Badge</s-badge>
		<s-badge closable variant="purple">Badge</s-badge>
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
