<template>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="width: 50%;">
        <label for="multiple-dropdown">Choose an Option (Multiple):</label>
        <s-dropdown
          v-model="selectedOptions"
          :options="dropdownOptions"
          multiple
          optionLabel="label"
        />
      </div>
      <div style="width: 50%; text-align: center;">
        <p>Selected Options (Multiple): {{ selectedOptions ? selectedOptions.map(option => option.label).join(', ') : 'No options selected' }}</p>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      selectedOptionDisabled: null,
      selectedOptions: [],
      dropdownOptions: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 }
      ]
    };
  }
};
</script>