<template>
  <div>
    <SDropdown
      v-model="data.enrollment_path.id"
      :custom-formatter="(item) => admissionPaths.find((path) => path.id === item)?.name || ''"
      :placeholder="$t('select')"
      @change="validateSelection"
      required
    >
      <SDropdownItem
        v-for="path in admissionPaths"
        :key="path.id"
        :value="path.id"
      >
        {{ path.name }}
      </SDropdownItem>
    </SDropdown>

    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>

    <s-button @click="submitForm">Submit</s-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        enrollment_path: {
          id: null
        }
      },
      admissionPaths: [
        { id: 1, name: 'Path 1' },
        { id: 2, name: 'Path 2' },
        { id: 3, name: 'Path 3' },
      ],
      errorMessage: '' 
    };
  },
  methods: {
    validateSelection() {
      if (!this.data.enrollment_path.id) {
        this.errorMessage = 'Please select an enrollment path.';
      } else {
        this.errorMessage = ''; 
      }
    },
    submitForm() {
      this.validateSelection();
      if (!this.errorMessage) {
        alert('Form submitted successfully!');
      }
    }
  }
};
</script>
