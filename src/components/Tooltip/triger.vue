<template>
  <div>
    <s-tooltip position="top" style="margin: 5px; display: inline-block;" placement="top" trigger="click">
      <template #trigger>
        <s-button>Click me!</s-button>
      </template>
      <template #content>Tooltip content</template>
    </s-tooltip>
    <s-tooltip position="right" style="margin: 5px; display: inline-block;" placement="top" trigger="mouseenter">
      <template #trigger>
        <s-button>Hover me!</s-button>
      </template>
      <template #content>Tooltip content</template>
    </s-tooltip>
  </div>
</template>