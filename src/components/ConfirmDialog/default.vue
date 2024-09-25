<template>
  <s-button @click="show">Click me!</s-button>
  <s-confirmation-dialog
    ref="confirmationDialogRef"
    title="Confirmation"
    message="Are you sure you want to continue?"
    confirm-text="Ok"
    cancel-text="Cancel"
    type="info"
  />
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
</script>