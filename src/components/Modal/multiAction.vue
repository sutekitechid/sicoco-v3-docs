<template>
  <div>
    <!-- Trigger button for the multi-action modal -->
    <SButton @click="showModal">Open Multi-Action Modal</SButton>

    <!-- Multi-Action Modal -->
    <SModal
      v-if="isModalVisible"
      name="multi-action-modal"
      title="Multi-Action Modal"
      subtitle="Choose an action."
      :isAutoClose="false"
      :defaultHidden="false"
      @close="handleClose"
    >
      <template #default>
        <div class="profile-info" style="padding: 64px; background-color: #f5f5f5; color: black">
            <p>Choose what you want to do:</p>
            <SButton @click="saveChanges" class="mr-2">Save</SButton>
            <SButton @click="discardChanges" class="mr-2">Discard</SButton>
            <SButton @click="closeModal">Cancel</SButton>
        </div>
      </template>
    </SModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    saveChanges() {
      console.log("Changes saved!");
      this.closeModal();
    },
    discardChanges() {
      console.log("Changes discarded!");
      this.closeModal();
    },
    handleClose() {
      console.log("Modal closed");
    },
  },
};
</script>
