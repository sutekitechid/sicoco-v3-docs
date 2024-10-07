<template>
  <div>
    <!-- Trigger button for the auto-close modal -->
    <SButton @click="showModal">Open Auto-Close Modal</SButton>

    <!-- Auto-Close Modal -->
    <SModal
      v-if="isModalVisible"
      name="auto-close-modal"
      title="Auto-Close Modal"
      subtitle="This modal will close automatically after 5 seconds."
      :isAutoClose="true"
      :autoCloseDuration="5"
      :defaultHidden="false"
      @close="handleClose"
    >
      <template #default>
        <div class="profile-info" style="padding: 64px; background-color: #f5f5f5; color: black">
            <p>This modal will automatically close in 5 seconds.</p>
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
    handleClose() {
      console.log("Auto-close modal closed");
      this.isModalVisible = false;
    },
  },
};
</script>
