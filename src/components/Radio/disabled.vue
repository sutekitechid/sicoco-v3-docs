<template>
        <div class="mt-[-20px] flex flex-wrap gap-4">
            <div class="mt-4 flex items-center">
                <s-radio v-model="food" value="burger" disabled/>
                <label class="mb-4"> Burger </label>
             </div>
             <div class="mt-4 flex items-center">
                <s-radio v-model="food" value="pizza" disabled/>
                <label class="mb-4"> Pizza </label>
             </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'

const food = ref('')
</script>