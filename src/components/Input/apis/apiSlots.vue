<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'prefix',
    description: 'The prefix slot',
    props: '',
  },
  {
    name: 'suffix',
    description: 'The suffix slot',
    props: '',
  },
  {
    name: 'required',
    description: 'The slot of required error. You can input custom error required message with this prop.',
    props: 'option: required',
  },
  {
    name: 'minValue',
    description: 'The slot of minValue error (Number typed only).',
    props: 'option: minValue',
  },
  {
    name: 'maxValue',
    description: 'The slot of maxValue error (Number typed only)',
    props: 'option: maxValue',
  },
  {
    name: 'exactLength',
    description: 'The slot of exactLength error (text, email type only)',
    props: 'option: exactLength',
  },
  {
    name: 'minLength',
    description: 'The slot of minLength error (text, email typed only)',
    props: 'option: minLength',
  },
  {
    name: 'maxLength',
    description: 'The slot of maxLength error (text, email typed only)',
    props: 'option: maxLength',
  },
  {
    name: 'url',
    description: 'Url error validation slot',
    props: 'option: url',
  },
  {
    name: 'email',
    description: 'Email error validation slot',
    props: 'option: email',
  },
  {
    name: 'errors',
    description: 'Custom errors slot',
    props: 'option: validation',
  },
]
</script>
