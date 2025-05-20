<template>
	<SRichTextEditor v-model="content" data-cy="my-text-editor" required>
		<template #required> This field is required. Please fill it out. </template>
	</SRichTextEditor>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { SRichTextEditor } from '@sutekitechid/sicoco-v3-next'

const content = ref('')
</script>
