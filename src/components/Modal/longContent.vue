<template>
  <div>
    <!-- Trigger button for the long content modal -->
    <SButton @click="showModal">Open Long Content Modal</SButton>

    <!-- Long Content Modal -->
    <SModal
      v-if="isModalVisible"
      name="long-content-modal"
      title="Long Content Modal"
      subtitle="This is a modal with long content."
      :isAutoClose="false"
      :defaultHidden="false"
      @close="handleClose"
      style="background-color: white; color: black"
    >
      <template #default>
        <div class="profile-info" style="padding: 64px; background-color: #f5f5f5;"> 
          <p v-for="i in 50" :key="i" style="color: black">This is line {{ i }} of content.</p>
          <br>
          <SButton @click="closeModal" style="color: black">Close</SButton>
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
    handleClose() {
      console.log("Modal closed");
    },
  },
};
</script>