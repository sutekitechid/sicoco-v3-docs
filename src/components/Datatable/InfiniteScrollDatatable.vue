<template>
	<div id="component-sicoco">
		<Datatable
			id="default-datatable"
			:data="coffe.hot"
			:paginated="paginated"
			:selectable="selectable"
			infinite-scroll
		></Datatable>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Datatable from './Datatable.vue'
import coffe from './coffee.json'

const paginated = ref(false)
const selectable = ref(false)
</script>
