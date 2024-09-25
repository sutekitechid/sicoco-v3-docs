<template>
  <s-button class="ml-2" @click="show('warning')">Warning!</s-button>
  <s-button class="ml-2" @click="show('success')">Success!</s-button>
  <s-button class="ml-2" @click="show('info')">Info!</s-button>
  <s-button class="ml-2" @click="show('danger')">Danger!</s-button>
  <s-confirmation-dialog
    ref="confirmationDialogRef"
    :title="title"
    :message="message"
    confirm-text="Ok"
    cancel-text="Cancel"
    :type="currentType"
  />
</template>

<script setup>
import { ref } from 'vue'

const confirmationDialogRef = ref(null)
const title = ref("Delete Data")
const message = ref("Are you sure you want to delete this data?")
const currentType = ref("")

const show = (type) => {
  currentType.value = type
  confirmationDialogRef.value.show({
    onConfirm: () => {
      console.log("Confirmed")
    }
  })
}
</script>