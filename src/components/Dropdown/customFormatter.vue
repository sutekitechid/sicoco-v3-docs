<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="width: 50%;">
        <label for="default-dropdown">Choose an Option (Default):</label>
        <SDropdown
          v-model="selectedOption"
          :options="dropdownOptions.map(option => option.id)"
          :customFormatter="formatLabel"
          placeholder="Choose an option"
        />
      </div>
      <div style="width: 50%; text-align: center;">
        <p>Name: {{ selectedOption ? getSelectedName(selectedOption) : 'No option selected' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { name: 'John Doe', id: 1 },
        { name: 'Jane Smith', id: 2 },
      ]
    };
  },
  methods: {
    formatLabel(id) {
      return id;
    },
    getSelectedName(id) {
      const selectedOption = this.dropdownOptions.find(option => option.id === id);
      return selectedOption ? ` ${selectedOption.name}` : 'No option selected';
    }
  }
};
</script> 