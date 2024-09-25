<template>
  <s-button @click="show">Click me!</s-button>
  <s-confirmation-dialog
    ref="confirmationDialogRef"
    title="Exit Application"
    message="Are you sure you want to exit the application?"
    confirm-text="Yes, Exit"
    cancel-text="No, Stay Here"
    type="info"
  />
</template>

<script setup>
import { ref } from 'vue'

const confirmationDialogRef = ref(null)

const show = () => {
  confirmationDialogRef.value.show({
    onConfirm: () => {
      console.log("User chooses to exit.")
      hide()
    }
  })
}

const hide = () => {
  confirmationDialogRef.value.hide()
}
</script>