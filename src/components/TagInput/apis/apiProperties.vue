<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
    {
        name: 'v-model',
        type: 'array',
        default: '',
        value: '',
        description: 'Binding Value'
    },
    {
        name: 'custom-type',
        type: 'function',
        default: '() => "gray" ',
        value: '',
        description: 'Tag color in taginput.'
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        value: '',
        description: 'Make the taginput required.'
    },
    {
        name: 'custom-validators',
        type: 'object',
        default: '',
        value: '',
        description: 'Add custom validation.'
    },
    {
        name: 'auto-complete',
        type: 'boolean',
        default: 'false',
        value: '',
        description: 'Automatically add the value to v-model after the user presses the tab key or a key registered in the props keydown.'
    },
    {
        name: 'custom-formatter',
        type: 'function',
        default: '',
        value: '',
        description: 'Custom tag label format.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'true',
        value: '',
        description: 'Taginput label'
    },
    {
        name: 'options',
        type: 'array',
        default: '',
        value: '',
        description: 'Taginput options'
    },
    {
        name: 'select-all',
        type: 'boolean',
        default: 'false',
        value: '',
        description: 'Display select all button.'
    },
    {
        name: 'keydown',
        type: 'array',
        default: '',
        value: '',
        description: 'List of buttons for autocomplete.'
    },
]
</script>