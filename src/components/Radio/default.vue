<template>
        <div class="mt-[-20px] flex flex-wrap gap-4">
            <div class="mt-4 flex items-center">
                <s-radio v-model="food" value="burger" type="primary"/>
                <label class="mb-4"> Burger </label>
             </div>
              <div class="flex items-center">
                <s-radio v-model="food" value="pizza" type="primary"/>
                <label class="mb-3"> Pizza </label>
             </div>
             <div class="flex items-center">
                <s-radio v-model="food" value="chicken" type="primary"/>
                <label class="mb-3"> Chicken </label>
             </div>
             <div class="flex items-center">
                <s-radio v-model="food" value="kebab" type="primary"/>
                <label class="mb-3"> Kebab </label>
             </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'

const food = ref('')
</script>