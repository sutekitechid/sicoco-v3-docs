<template>
	<ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
	{
		name: 'id',
		type: 'string',
		default: "'editor'",
		description: 'The unique identifier for the editor.',
	},
	{
		name: 'modelValue',
		type: 'string',
		default: '',
		description: "The value of the editor's content.",
	},
	{
		name: 'readOnly',
		type: 'boolean',
		default: 'false',
		description: 'Whether the editor is in read-only mode.',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: "''",
		description: 'Placeholder text displayed when the editor is empty.',
	},
	{
		name: 'options',
		type: 'Object',
		default: '{}',
		description: 'Additional configuration options for the editor.',
	},
	{
		name: 'customValidators',
		type: 'Record<string, any>',
		default: '{}',
		description: "Custom validation rules for the editor's content.",
	},
	{
		name: 'maxlength',
		type: 'number',
		default: 'null',
		description: 'Maximum number of characters allowed in the editor.',
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false',
		description: "Whether the editor's content is required.",
	},
	{
		name: 'attachmentsToolbar',
		type: 'boolean',
		default: 'false',
		description: 'Whether to show the attachments toolbar.',
	},
	{
		name: 'dataCy',
		type: 'string',
		default: '',
		description: 'The data-cy attribute for testing purposes.',
	},
	{
		name: 'imageUploadHandler',
		type: '(file: File) => string | Promise<string>',
		default: 'undefined',
		description:
			'Function to handle image uploads, returning a URL or a Promise resolving to a URL.',
	},
	{
		name: 'videoUploadHandler',
		type: '(file: File) => string | Promise<string>',
		default: 'undefined',
		description:
			'Function to handle video uploads, returning a URL or a Promise resolving to a URL.',
	},
	{
		name: 'attachmentUploadHandler',
		type: '(file: File) => string | Promise<string>',
		default: 'undefined',
		description:
			'Function to handle attachment uploads, returning a URL or a Promise resolving to a URL.',
	},
]
</script>
