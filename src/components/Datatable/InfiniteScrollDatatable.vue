<template>
	<Datatable
		id="default-datatable"
		:data="hugeData"
		:paginated="paginated"
		:selectable="selectable"
		infinite-scroll
	></Datatable>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Datatable from './Datatable.vue'
import coffe from './coffee.json'

// Replikasi data dari coffee.json untuk membuat dataset besar (1000 items)
const hugeData = Array.from({ length: 1000 }, (_, i) => {
	const coffeeItem = coffe.hot[i % coffe.hot.length]
	return {
		id: i + 1,
		title: coffeeItem.title,
		description: coffeeItem.description,
		ingredients: coffeeItem.ingredients,
		image: coffeeItem.image,
	}
})

const paginated = ref(false)
const selectable = ref(false)
</script>
