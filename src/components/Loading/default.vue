<template>
	<s-button @click="showLoading">Click Loading</s-button>
	<s-loading ref="loading"></s-loading>
</template>

<script setup>
import { ref } from 'vue'
import { SButton, SLoading } from '@sutekitechid/sicoco-v3-next'

const loading = ref(null)

const showLoading = () => {
	loading.value.open()

	setTimeout(() => {
		loading.value.close()
	}, 3000)
}
</script>
