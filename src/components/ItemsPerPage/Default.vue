<template>
	<div>
		<SItemsPerPage
			:total="total"
			v-model="perPage"
			:options="options"
			:label-text="perPageLabelText"
			:per-page-formatter="perPageItemFormatter"
			:data-cy="itemsPerPageDataCy"
			@change="onChangeItemsPerPage"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SItemsPerPage } from '@sutekitechid/sicoco-v3-next'

const total = ref(100)
const perPage = ref(10)
const options = ref([10, 20, 50, 100])
const perPageLabelText = ref('Items per page')
const itemsPerPageDataCy = ref('items-per-page')
const perPageItemFormatter = (value: string | number) => {
	return `${value} books`
}
const onChangeItemsPerPage = (value: number) => {
	console.log('Items per page changed to:', value)
}
</script>
