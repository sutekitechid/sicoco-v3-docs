<template>
	<div id="component-sicoco">
		<Datatable
			id="default-datatable"
			:data="coffe"
			:paginated="paginated"
			:selectable="selectable"
		></Datatable>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Datatable from './Datatable.vue'

const paginated = ref(true)
const selectable = ref(true)
const coffe: string[] = []
</script>
