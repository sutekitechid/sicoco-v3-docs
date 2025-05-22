<template>
	<SAccordion class="w-full not-content mt-4" v-model="accordionValue">
		<SAccordionItem value="1">
			<SAccordionTrigger>
				<template #label> Header 1 </template>
			</SAccordionTrigger>
			<SAccordionContent class="dark:text-white">
				Content {{ accordionValue }} is opened!
			</SAccordionContent>
		</SAccordionItem>
		<SAccordionItem value="2">
			<SAccordionTrigger>
				<template #label> Header 2 </template>
			</SAccordionTrigger>
			<SAccordionContent class="dark:text-white">
				Content {{ accordionValue }} is opened!
			</SAccordionContent>
		</SAccordionItem>
	</SAccordion>
</template>

<script setup>
import { ref } from 'vue'
import {
	SAccordion,
	SAccordionItem,
	SAccordionTrigger,
	SAccordionContent,
} from '@sutekitechid/sicoco-v3-next'

const accordionValue = ref('1')
</script>
