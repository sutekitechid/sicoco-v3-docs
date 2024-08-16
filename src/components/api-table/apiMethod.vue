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
          Parameters
        </s-table-head-cell>
        <s-table-head-cell class="!px-4">
          Return
        </s-table-head-cell>
      </s-table-head>
      <s-table-body>
        <s-table-row v-for="method in methods" :key="method.name">
          <s-table-cell class="!px-4">
            <s-badge type="danger">
              {{ method.name }}
            </s-badge>
          </s-table-cell>
          <s-table-cell class="!px-4">
            {{ method.description }}
          </s-table-cell>
          <s-table-cell class="!px-4">
            <s-badge v-if="method.parameters" type="danger">
              {{ method.parameters }}
            </s-badge>
          </s-table-cell>
          <s-table-cell class="!px-4 !text-left">
            <s-badge v-if="method.return" type="danger">
              {{ method.return }}
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
  methods: {
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
