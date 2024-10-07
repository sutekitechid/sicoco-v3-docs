<template>
  <div>
    <SButton @click="showModal">Open Image Modal</SButton>

    <SModal
      v-if="isModalVisible"
      name="image-modal"
      :isAutoClose="false"
      :defaultHidden="false"
      @close="handleClose"
    >
      <template #default>
        <div style="width: 640px; max-width: 100%; padding: 20px;">
          <img
            src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/12/22/732885074.jpg"
            alt="Image Placeholder"
            style="width: 100%; max-width: 1000px; height: auto;"
          />
          <div class="profile-info" style="padding: 15px; background-color: #f5f5f5;">
            <p style="text-align: left; margin-top: 20px; margin-bottom: 20px; color: black;">
              Cats, in Latin, Felis silvestris catus, are a type of carnivore. The word "cat" usually refers to a "cat" that has been domesticated, but can also refer to "big cats" such as lions, tigers, and leopards.
            </p>
          </div>
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
      this.isModalVisible = false;
    },
  },
};
</script>