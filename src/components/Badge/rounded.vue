<template>
	<div class="flex gap-2" id="component-sicoco">
		<s-badge rounded variant="primary">Badge</s-badge>
		<s-badge rounded variant="success">Badge</s-badge>
		<s-badge rounded variant="warning">Badge</s-badge>
		<s-badge rounded variant="danger">Badge</s-badge>
		<s-badge rounded variant="dark-danger">Badge</s-badge>
		<s-badge rounded variant="grey">Badge</s-badge>
		<s-badge rounded variant="secondary">Badge</s-badge>
		<s-badge rounded variant="purple">Badge</s-badge>
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
