<template>
  <div>
    <s-table
      class="rounded-none shadow-none w-full mb-5"
    >
      <s-table-head class="bg-white border-b-1 text-grey-100 font-semibold !text-lg capitalize z-0">
        <s-table-head-cell class="!px-4">
          Name
        </s-table-head-cell>
        <s-table-head-cell class="!px-4">
          Description
        </s-table-head-cell>
        <s-table-head-cell class="!px-4">
          Props (if scoped)
        </s-table-head-cell>
      </s-table-head>
      <s-table-body>
        <s-table-row v-for="slot in slots" :key="slot.name">
          <s-table-cell class="!px-4">
            <s-badge type="danger">
              {{ slot.name }}
            </s-badge>
          </s-table-cell>
          <s-table-cell class="!px-4">
            {{ slot.description }}
          </s-table-cell>
          <s-table-cell class="!px-4 !text-left">
            <s-badge v-if="slot.props" type="danger">
              {{ slot.props }}
            </s-badge>
          </s-table-cell>
        </s-table-row>
      </s-table-body>
    </s-table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  slots: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="css">
table {
  @apply !table table-auto w-full;
}
</style>
