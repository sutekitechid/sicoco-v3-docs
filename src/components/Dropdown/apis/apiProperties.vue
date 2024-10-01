<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'v-model',
    type: ['Array', 'String', 'Boolean', 'Number'],
    description: 'Binding value',
    values: [],
    default: ''
  },
  {
    name: 'options',
    type: 'Array',
    description: 'Dropdown option choices',
    values: [],
    default: []
  },
  {
    name: 'placeholder',
    type: 'String',
    description: 'Dropdown label if no value is selected',
    values: [],
    default: ''
  },
  {
    name: 'option-label',
    type: 'String',
    description: 'Determines the label key when using the options prop (Not active if the customFormatter prop is filled)',
    values: [],
    default: false
  },
  {
    name: 'custom-formatter',
    type: 'Function',
    description: 'Formats the option label',
    values: [],
    default: ''
  },
  {
    name: 'disabled',
    type: 'Boolean',
    description: 'Disables the dropdown',
    values: [],
    default: false
  },
  {
    name: 'customFilter',
    type: 'Function',
    description: 'Filters the dropdown options (active if the searchable prop is true and the backendSearch prop is false)',
    values: [],
    default: false
  },
  {
    name: 'required',
    type: 'Boolean',
    description: 'Validates the dropdown as required',
    values: [],
    default: ''
  },
  {
    name: 'customValidators',
    type: 'Object',
    description: 'Adds custom validation to the dropdown. Must fill in the errors slot',
    values: [],
    default: ''
  },
  {
    name: 'searchable',
    type: 'Boolean',
    description: 'Searches for options in the dropdown based on user input',
    values: [],
    default: false
  },
  {
    name: 'backendSearch',
    type: 'Boolean',
    description: 'Searches for options in the dropdown based on user input from the backend',
    values: [],
    default: false
  },
  {
    name: 'loading',
    type: 'Boolean',
    description: 'Displays a loading indicator',
    values: [],
    default: false
  },
  {
    name: 'triggerClass',
    type: 'String',
    description: 'Adds a class to the trigger button by default',
    values: [],
    default: ''
  },
  {
    name: 'optionClass',
    type: 'String',
    description: 'Adds a class to the options',
    values: [],
    default: ''
  },
  {
    name: 'multiple',
    type: 'Boolean',
    description: 'Allows selecting multiple options',
    values: [],
    default: false
  },
  {
    name: 'close-on-select',
    type: 'Boolean',
    description: 'Closes the dropdown after selecting an option',
    values: [],
    default: true
  },
  {
    name: 'append-to-body',
    type: 'Boolean',
    description: 'Appends the dropdown to the body (prevents event bubbling)',
    values: [],
    default: false
  },
  {
    name: 'mobile-modal',
    type: 'Boolean',
    description: 'Displays a modal version on mobile devices',
    values: [],
    default: false
  },
  {
    name: 'inline',
    type: 'Boolean',
    description: 'Displays the dropdown options without a trigger (headless version)',
    values: [],
    default: false
  },
  {
    name: 'placement',
    type: 'String',
    description: 'Determines the position of the dropdown options',
    values: [],
    default: 'auto'
  },
  {
    name: 'closable',
    type: 'Boolean',
    description: 'Closes the dropdown when clicking outside the dropdown element',
    values: [],
    default: true
  },
  {
    name: 'has-icon',
    type: 'Boolean',
    description: 'Adds an icon to the dropdown',
    values: [],
    default: false
  },
  {
    name: 'is-option-disabled',
    type: 'Function',
    description: 'Disables dropdown options when using the options prop',
    values: [],
    default: ''
  }
]
</script>