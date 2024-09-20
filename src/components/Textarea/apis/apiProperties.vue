<template>
  <ApiPropertyTable :properties="data" />
</template>

<script setup>
import ApiPropertyTable from '@/components/api-table/apiProperty.vue'
const data = [
  {
    name: 'v-model',
    type: [
      'array',
      'string',
      'boolean',
      'number',
      'object'
    ],
    default: '',
    description: 'Binding values',
    },
  {
    name: 'readonly',
    type: 'boolean',
    default: 'FALSE',
    description: 'Membuat checkbox hanya bisa dilihat',
    },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'FALSE',
    description: 'Disable checkbox',
    },
  {
    name: 'required',
    type: 'boolean',
    default: 'FALSE',
    description: 'Validasi checkbox wajib diisi',
    },
  {
    name: 'maxlength',
    type: ['String','Number'],
    default: '',
    description: 'Jumlah karakter maksimal',
    },
  {
    name: 'rows',
    type: ['String', 'Number'],
    default: '3',
    description: 'Jumlah row',
    },
  {
    name: 'placeholder',
    type: 'String',
    default: '',
    description: 'Label textarea',
    },
  {
    name: 'size',
    type: 'String',
    default: 'md',
    description: 'Ukuran textarea',
  },
]
</script>
