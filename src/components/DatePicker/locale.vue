<template>
	<div class="flex flex-col gap-6" id="component-sicoco">
		<div>
			<p>Locale: en-US</p>
			<SDatePicker v-model="dateEn" locale="en-US" placeholder="en-US" />
		</div>
		<div>
			<p>Locale: id-ID</p>
			<SDatePicker v-model="dateId" locale="id-ID" placeholder="id-ID" />
		</div>
		<div>
			<p>Locale: fr-FR</p>

			<SDatePicker v-model="dateFr" locale="fr-FR" placeholder="fr-FR" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SDatePicker } from '@sutekitechid/sicoco-v3-next'

const dateEn = ref(null)
const dateId = ref(null)
const dateFr = ref(null)
</script>
