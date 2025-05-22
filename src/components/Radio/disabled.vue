<template>
	<div class="mt-4 not-content">
		<SRadioGroup class="flex flex-wrap gap-4" v-model="variant">
			<SRadioGroupItem value="1" class="flex items-center">
				Value 1
			</SRadioGroupItem>
			<SRadioGroupItem value="2" class="flex items-center">
				Value 2
			</SRadioGroupItem>
		</SRadioGroup>
		<SRadioGroup class="flex flex-wrap gap-4" v-model="disabledVariant">
			<SRadioGroupItem value="1" class="flex items-center" disabled>
				Value 1
			</SRadioGroupItem>
			<SRadioGroupItem value="2" class="flex items-center" disabled>
				Value 2
			</SRadioGroupItem>
		</SRadioGroup>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SRadioGroupItem, SRadioGroup } from '@sutekitechid/sicoco-v3-next'

const variant = ref('1')
const disabledVariant = ref('1')
</script>