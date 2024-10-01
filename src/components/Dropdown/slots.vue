<template>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="width: 50%;">
      <SDropdown>
        <SDropdownItem
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </SDropdownItem>
      </SDropdown>
    </div>
    <div style="width: 50%; text-align: center;">
      <p>Selected Option (Default): {{ selectedOption ? selectedOption.label : 'No option selected' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: 'Option 1', value: 1, disabled: false },
        { label: 'Option 2', value: 2, disabled: true },
      ],
      selectedOption: null,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      console.log(`Selected option: ${option.label}`);
    },
  },
};
</script>