<template>
	<div class="mt-4 not-content">
		<SCheckbox v-model="paginated" :value="true">Paginated</SCheckbox>
	</div>
	<Datatable
		id="default-datatable"
		:data="coffe.hot"
		:paginated="paginated"
		:selectable="selectable"
	></Datatable>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { SCheckbox } from '@sutekitechid/sicoco-v3-next'
import Datatable from './Datatable.vue'
import coffe from './coffee.json'

const paginated = ref(true)
const selectable = ref(false)
</script>
