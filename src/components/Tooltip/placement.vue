<template>
    <div class="flex flex-wrap gap-2 items-center">
      <s-tooltip class="mt-4" position="top"  placement="top" trigger="mouseenter">
      <template #trigger>
        <s-button>Hover me! (Top)</s-button>
      </template>
      <template #content>Tooltip content (Top)</template>
    </s-tooltip>
      <s-tooltip position="top-start"  placement="top-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Top-Start)</s-button>
        </template>
        <template #content>Tooltip content (Top-Start)</template>
      </s-tooltip>
      <s-tooltip position="top-end"  placement="top-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Top-End)</s-button>
        </template>
        <template #content>Tooltip content (Top-End)</template>
      </s-tooltip>
      <s-tooltip position="bottom"  placement="bottom" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Bottom)</s-button>
        </template>
        <template #content>Tooltip content (Bottom)</template>
      </s-tooltip>
      <s-tooltip position="bottom-start"  placement="bottom-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Bottom-Start)</s-button>
        </template>
        <template #content>Tooltip content (Bottom-Start)</template>
      </s-tooltip>
      <s-tooltip position="bottom-end"  placement="bottom-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Bottom-End)</s-button>
        </template>
        <template #content>Tooltip content (Bottom-End)</template>
      </s-tooltip>
      <s-tooltip position="left"  placement="left" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Left)</s-button>
        </template>
        <template #content>Tooltip content (Left)</template>
      </s-tooltip>
      <s-tooltip position="left-start"  placement="left-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Left-Start)</s-button>
        </template>
        <template #content>Tooltip content (Left-Start)</template>
      </s-tooltip>
      <s-tooltip position="left-end"  placement="left-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Left-End)</s-button>
        </template>
        <template #content>Tooltip content (Left-End)</template>
      </s-tooltip>
      <s-tooltip position="right"  placement="right" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Right)</s-button>
        </template>
        <template #content>Tooltip content (Right)</template>
      </s-tooltip>
      <s-tooltip position="right-start"  placement="right-start" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Right-Start)</s-button>
        </template>
        <template #content>Tooltip content (Right-Start)</template>
      </s-tooltip>
      <s-tooltip position="right-end"  placement="right-end" trigger="mouseenter">
        <template #trigger>
          <s-button>Hover me! (Right-End)</s-button>
        </template>
        <template #content>Tooltip content (Right-End)</template>
      </s-tooltip>
    </div>
</template>