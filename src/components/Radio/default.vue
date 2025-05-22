<template>
	<div class="mt-4">
		<SRadioGroup class="flex flex-wrap gap-4 not-content" v-model="variant">
			<SRadioGroupItem value="default" class="flex items-center">
				Default
			</SRadioGroupItem>
			<SRadioGroupItem
				value="primary"
				variant="primary"
				class="flex items-center"
			>
				Primary
			</SRadioGroupItem>
			<SRadioGroupItem
				value="danger"
				variant="danger"
				class="flex items-center"
			>
				Danger
			</SRadioGroupItem>
			<SRadioGroupItem
				value="warning"
				variant="warning"
				class="flex items-center"
			>
				Warning
			</SRadioGroupItem>
			<SRadioGroupItem
				value="success"
				variant="success"
				class="flex items-center"
			>
				Success
			</SRadioGroupItem>
		</SRadioGroup>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SRadioGroupItem, SRadioGroup } from '@sutekitechid/sicoco-v3-next'

const variant = ref('default')
</script>