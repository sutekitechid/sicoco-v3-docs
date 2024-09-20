<template>
  <ApiSlotTable :slots="data" />
</template>

<script setup>
import ApiSlotTable from '@/components/api-table/apiSlot.vue'
const data = [
  {
    name: 'required',
    description: 'Mengubah tampilan untuk validasi wajib diisi',
    props: '',
    },
  {
    name: 'minlenght',
    description: 'Mengubah tampilan untuk validasi minimum karakter',
    props: '',
  },
]
</script>
