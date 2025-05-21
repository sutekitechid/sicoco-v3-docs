<template>
	<div class="flex flex-col gap-4 not-content">
		<SAlert :closable="false">Closable Alert False</SAlert>
		<SAlert>Closable Alert True</SAlert>
	</div>
</template>

<script setup>
import { SAlert } from '@sutekitechid/sicoco-v3-next'
</script>
