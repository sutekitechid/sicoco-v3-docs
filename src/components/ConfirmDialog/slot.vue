<template>
  <s-button @click="show">Click me!</s-button>
  <s-confirmation-dialog
    ref="confirmationDialogRef"
    title="Warning"
    confirm-text="Yes"
    cancel-text="No"
    type="warning"
  >
    <template #default>
      <p>You are about to delete the selected data. This action cannot be undone. Are you sure?</p>
    </template>
    <template #footer>
      <s-button @click="hide" variant="secondary">Cancel</s-button>
      <s-button @click="confirmAction" variant="primary">Proceed</s-button>
    </template>
  </s-confirmation-dialog>
</template>

<script setup>
import { ref } from 'vue'

const confirmationDialogRef = ref(null)

const show = () => {
  confirmationDialogRef.value.show({
    onConfirm: () => {
      console.log("Confirmed")
      hide()
    }
  })
}

const hide = () => {
  confirmationDialogRef.value.hide()
}

const confirmAction = () => {
  console.log("User confirmed the action.")
  hide()
}
</script>