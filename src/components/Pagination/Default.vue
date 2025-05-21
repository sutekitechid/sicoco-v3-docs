<template>
	<div>
		<SPagination
			v-model:page="page"
			v-model:perPage="perPage"
			:total="total"
			:default-page="defaultPage"
			:options="options"
			:per-page-label-text="perPageLabelText"
			:per-page-item-formatter="perPageItemFormatter"
			:show-per-page-options="showPerPageOptions"
			:show-pagination-input="showPaginationInput"
			:data-cy="dataCy"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SPagination } from '@sutekitechid/sicoco-v3-next'

const page = ref(1)
const perPage = ref(20)
const total = ref(100)
const defaultPage = ref(1)
const options = ref([10, 20, 50, 100])
const perPageLabelText = ref('Per Page?')
const perPageItemFormatter = ref((perPage: number | string) => {
	return `${perPage} butir`
})
const showPerPageOptions = ref(true)
const showPaginationInput = ref(true)
const dataCy = ref('our-pagination')
</script>
