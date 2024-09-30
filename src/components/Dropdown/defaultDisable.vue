<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="width: 50%;">
        <label for="default-dropdown">Choose an Option (Default):</label>
        <SDropdown
          v-model="selectedOption"
          :options="dropdownOptions"
          placeholder="Choose an option"
          optionLabel="label"
        />
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
      <div style="width: 50%;">
        <label for="disabled-dropdown">Choose an Option (Disabled):</label>
        <SDropdown
          v-model="selectedOptionDisabled"
          :options="dropdownOptions"
          placeholder="Choose an option"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null, 
      selectedOptionDisabled: null,
      dropdownOptions: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 }
      ]
    };
  }
};
</script>