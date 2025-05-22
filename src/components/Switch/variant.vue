<template>
	<div class="flex flex-col gap-4 not-content">
		<div class="flex items-center gap-4">
			<SSWitch v-model="checked1" variant="primary" />
			<span>Primary / Default</span>
		</div>
		<div class="flex items-center gap-4">
			<SSWitch v-model="checked2" variant="success" />
			<span>Success</span>
		</div>
		<div class="flex items-center gap-4">
			<SSWitch v-model="checked3" variant="warning" />
			<span>Warning</span>
		</div>
		<div class="flex items-center gap-4">
			<SSWitch v-model="checked4" variant="danger" />
			<span>Danger</span>
		</div>
		<div class="flex items-center gap-4">
			<SSWitch v-model="checked5" variant="gray" />
			<span>Gray / Grey</span>
		</div>
		<div class="flex items-center gap-4">
			<SSWitch v-model="checked6" variant="secondary" />
			<span>Secondary</span>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SSWitch } from '@sutekitechid/sicoco-v3-next'

const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(true)
const checked4 = ref(true)
const checked5 = ref(true)
const checked6 = ref(true)
</script>
