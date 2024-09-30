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
    name: 'optionLabel',
    type: 'String',
    description: 'Determines the label key when using the options prop (Not active if the customFormatter prop is filled)',
    values: [],
    default: 'FALSE'
  },
  {
    name: 'customFormatter',
    type: 'Function',
    description: 'Formats the option label',
    values: [],
    default: 'FALSE'
  },
  {
    name: 'disabled',
    type: 'Boolean',
    description: 'Disables the dropdown',
    values: [],
    default: 'FALSE'
  },
  {
    name: 'customFilter',
    type: 'Function',
    description: 'Filters the dropdown options (active if the searchable prop is true and the backendSearch prop is false)',
    values: [],
    default: 'FALSE'
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
    default: 'FALSE'
  },
  {
    name: 'backendSearch',
    type: 'Boolean',
    description: 'Searches for options in the dropdown based on user input from the backend',
    values: [],
    default: 'FALSE'
  },
  {
    name: 'loading',
    type: 'Boolean',
    description: 'Displays a loading indicator',
    values: [],
    default: 'FALSE'
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
    default: 'FALSE'
  },
  {
    name: 'closeOnSelect',
    type: 'Boolean',
    description: 'Closes the dropdown after selecting an option',
    values: [],
    default: 'TRUE'
  },
  {
    name: 'appendToBody',
    type: 'Boolean',
    description: 'Appends the dropdown to the body (prevents event bubbling)',
    values: [],
    default: 'FALSE'
  },
  {
    name: 'mobileModal',
    type: 'Boolean',
    description: 'Displays a modal version on mobile devices',
    values: [],
    default: 'FALSE'
  },
  {
    name: 'inline',
    type: 'Boolean',
    description: 'Displays the dropdown options without a trigger (headless version)',
    values: [],
    default: 'FALSE'
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
    default: 'TRUE'
  },
  {
    name: 'hasIcon',
    type: 'Boolean',
    description: 'Adds an icon to the dropdown',
    values: [],
    default: 'FALSE'
  },
  {
    name: 'isOptionDisabled',
    type: 'Function',
    description: 'Disables dropdown options when using the options prop',
    values: [],
    default: ''
  }
]
</script>