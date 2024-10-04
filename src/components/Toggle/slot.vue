<template>
  <div>    
    <s-toggle v-model="slotToggle" :true-value="true" :false-value="false">
      <template v-slot:default>
        <span>{{ slotToggle ? 'on' : 'of' }}</span>
      </template>
    </s-toggle>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slotToggle: false,
    }
  }
}
</script>
