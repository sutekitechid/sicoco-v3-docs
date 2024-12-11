<template>
	<div class="mt-4">
		<s-checkbox disabled v-model="type"> Primary </s-checkbox>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SCheckbox } from '@sutekitechid/sicoco-v3-next'

const type = ref([])
</script>
