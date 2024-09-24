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
          Type
        </s-table-head-cell>
        <s-table-head-cell class="!px-4">
          Values
        </s-table-head-cell>
        <s-table-head-cell class="!px-4">
          Default
        </s-table-head-cell>
      </s-table-head>
      <s-table-body>
        <s-table-row v-for="property in properties" :key="property.name">
          <s-table-cell class="!px-4 flex gap-2 flex-wrap">
            <s-badge type="danger">
              {{ property.name }}
            </s-badge>
          </s-table-cell>
          <s-table-cell class="!px-4">
            {{ property.description }}
          </s-table-cell>
          <s-table-cell class="!px-4">
            <s-badge type="danger">
              {{ property.type }}
            </s-badge>
          </s-table-cell>
          <s-table-cell class="!px-4 flex gap-2 flex-wrap">
            <s-badge v-for="value in property.values" :key="value" type="danger">
              {{ value }}
            </s-badge>
          </s-table-cell>
          <s-table-cell class="!px-4 !text-left">
            <s-badge v-if="property.default" type="danger">
              {{ property.default }}
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
  properties: {
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
