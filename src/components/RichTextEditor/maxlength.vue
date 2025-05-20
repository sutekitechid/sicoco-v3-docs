<template>
	<SRichTextEditor
		v-model="content"
		data-cy="my-text-editor"
		:maxlength="250"
	/>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { SRichTextEditor } from '@sutekitechid/sicoco-v3-next'

const content = ref('')
</script>
