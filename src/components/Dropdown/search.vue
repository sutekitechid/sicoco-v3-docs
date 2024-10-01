<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="width: 50%;">
        <label for="search-dropdown">Choose an Option (Searchable):</label>
        <SDropdown
          v-model="selectedOptionSearch"
          :options="dropdownOptions"
          placeholder="Search options"
          optionLabel="label"
          searchable
        />
      </div>
      <div style="width: 50%; text-align: center;">
        <p>Option: {{ selectedOptionSearch ? selectedOptionSearch.label : 'No option selected' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOptionSearch: null,
      dropdownOptions: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
        { label: 'Option 4', value: 4 }
      ]
    };
  }
};
</script>