<template>
  <s-toggle v-model="toggleValue" :disabled="true"></s-toggle>
</template>

<script>
export default {
  data() {
    return {
      toggleValue: false
    }
  }
}
</script>