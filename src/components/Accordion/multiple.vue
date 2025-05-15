<template>
	<SAccordion class="w-full" type="multiple">
		<SAccordionItem value="1">
			<SAccordionTrigger>
				<template #label> Header 1 </template>
			</SAccordionTrigger>
			<SAccordionContent>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</SAccordionContent>
		</SAccordionItem>
		<SAccordionItem value="2">
			<SAccordionTrigger>
				<template #label> Header 2 </template>
			</SAccordionTrigger>
			<SAccordionContent>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
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

const accordionValue = ref([])
</script>
