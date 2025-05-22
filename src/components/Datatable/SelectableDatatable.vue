<template>
	<div>
		<p>Selected:</p>
		{{ selectedRows }}
	</div>
	<Datatable
		id="default-datatable"
		v-model:selectable-rows="selectedRows"
		:data="coffe.hot"
		:paginated="paginated"
		selectable
	></Datatable>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Datatable from './Datatable.vue'
import coffe from './coffee.json'

const paginated = ref(true)
const selectedRows = ref<string[]>([])
</script>
