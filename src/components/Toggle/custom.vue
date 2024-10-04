<template>
  <div>
    <s-toggle v-model="customToggle" :true-value="'on'" :false-value="'off'">
    </s-toggle>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customToggle: 'on',
    }
  }
}
</script>