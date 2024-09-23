<template>
    <div style="display: flex; flex-wrap: wrap;">
      <s-tooltip position="top" style="margin: 5px;" placement="top" trigger="mouseenter">
      <template #trigger>
        <s-button>Hover me! (Top)</s-button>
      </template>
      <template #content>Tooltip content (Top)</template>
    </s-tooltip>
      <s-tooltip position="top-start" style="margin: 5px;" placement="top-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Top-Start)</s-button>
        </template>
        <template #content>Tooltip content (Top-Start)</template>
      </s-tooltip>
      <s-tooltip position="top-end" style="margin: 5px;" placement="top-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Top-End)</s-button>
        </template>
        <template #content>Tooltip content (Top-End)</template>
      </s-tooltip>
      <s-tooltip position="bottom" style="margin: 5px;" placement="bottom" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Bottom)</s-button>
        </template>
        <template #content>Tooltip content (Bottom)</template>
      </s-tooltip>
      <s-tooltip position="bottom-start" style="margin: 5px;" placement="bottom-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Bottom-Start)</s-button>
        </template>
        <template #content>Tooltip content (Bottom-Start)</template>
      </s-tooltip>
      <s-tooltip position="bottom-end" style="margin: 5px;" placement="bottom-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Bottom-End)</s-button>
        </template>
        <template #content>Tooltip content (Bottom-End)</template>
      </s-tooltip>
      <s-tooltip position="left" style="margin: 5px;" placement="left" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Left)</s-button>
        </template>
        <template #content>Tooltip content (Left)</template>
      </s-tooltip>
      <s-tooltip position="left-start" style="margin: 5px;" placement="left-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Left-Start)</s-button>
        </template>
        <template #content>Tooltip content (Left-Start)</template>
      </s-tooltip>
      <s-tooltip position="left-end" style="margin: 5px;" placement="left-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Left-End)</s-button>
        </template>
        <template #content>Tooltip content (Left-End)</template>
      </s-tooltip>
      <s-tooltip position="right" style="margin: 5px;" placement="right" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Right)</s-button>
        </template>
        <template #content>Tooltip content (Right)</template>
      </s-tooltip>
      <s-tooltip position="right-start" style="margin: 5px;" placement="right-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Right-Start)</s-button>
        </template>
        <template #content>Tooltip content (Right-Start)</template>
      </s-tooltip>
      <s-tooltip position="right-end" style="margin: 5px;" placement="right-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Right-End)</s-button>
        </template>
        <template #content>Tooltip content (Right-End)</template>
      </s-tooltip>
    </div>
</template>