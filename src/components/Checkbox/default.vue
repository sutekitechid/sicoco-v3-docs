<template>
        <div class="flex flex-wrap gap-4">
            <div class="mt-4 flex items-center">
                <s-checkbox v-model="type" value="Primary" type="primary"/>
                <label class="mb-3"> Primary </label>
             </div>
              <div class="flex items-center">
                <s-checkbox v-model="type" value="Success" type="success"/>
                <label class="mb-3"> Success </label>
             </div>
              <div class="flex items-center">
                <s-checkbox v-model="type" value="Warning" type="warning"/>
                <label class="mb-3"> Warning </label>
             </div>
              <div class="flex items-center">
                <s-checkbox v-model="type" value="Danger" type="danger"/>
                <label class="mb-3"> Danger </label>
             </div>
             <div class="flex items-center">
                <s-checkbox v-model="type" value="Info" type="info"/>
                <label class="mb-3"> Info </label>
             </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'

const type = ref([])
</script>