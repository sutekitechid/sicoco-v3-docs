<template>
	<SDataTable
		:id="id"
		:data="computedData"
		data-cy="example-datatable"
		v-model="selectedRows"
		v-model:page="page"
		v-model:per-page="perPage"
		:total="data.length"
		:loading="loading"
		:paginated="paginated"
		:selectable="selectable"
		:headers-text-wrap="false"
		:infinite-scroll="infiniteScroll"
		@sort="$event => onSort($event)"
		@change-page="onChangePage"
		@change-per-page="onChangePerPage"
	>
		<SDataTableColumn field="title" sortable>
			<template #header> Name </template>
			<template #default="{ row }">
				<div class="flex gap-6 w-56 items-center">
					<img
						:src="row.image"
						alt="image"
						class="w-16 h-16 rounded-lg object-cover"
					/>
					<div class="w-full">
						{{ row.title }}
					</div>
				</div>
			</template>
		</SDataTableColumn>
		<SDataTableColumn field="description">
			<template #header> Description </template>
			<template #default="{ row }">
				<p class="w-56">
					{{ row.description }}
				</p>
			</template>
		</SDataTableColumn>
		<SDataTableColumn field="ingredients">
			<template #header> Ingredients </template>
			<template #default="{ row }">
				<div class="w-56">
					<ul class="list-disc pl-5">
						<li v-for="(ingredient, index) in row.ingredients" :key="index">
							{{ ingredient }}
						</li>
					</ul>
				</div>
			</template>
		</SDataTableColumn>
		<template #empty>
			<STableEmpty class="bg-white">
				<p class="font-semibold text-lg">No data found</p>
				<p>
					We couldn’t find any data matching your search criteria. Please try
					again.
				</p>
			</STableEmpty>
		</template>
	</SDataTable>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import {
	SDataTable,
	SDataTableColumn,
	STableEmpty,
} from '@sutekitechid/sicoco-v3-next'

const props = defineProps({
	id: {
		type: String,
		default: 'datatable',
	},
	data: {
		type: Array,
		default: () => [],
	},
	paginated: {
		type: Boolean,
		default: true,
	},
	selectable: {
		type: Boolean,
		default: true,
	},
	selectableRows: {
		type: Array,
		default: true,
	},
	infiniteScroll: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['update:selectableRows'])
const selectedRows = computed({
	get: () => props.selectableRows,
	set: value => {
		emit('update:selectableRows', value)
	},
})

const page = ref(1)
const perPage = ref(10)
const loading = ref(false)

const sortBy = ref('')
const desc = ref(false)
const computedData = computed(() => {
	// sort data
	const data = props.data
	if (sortBy.value) {
		const sort = (a: Record<string, any>, b: Record<string, any>) => {
			if (a[sortBy.value] < b[sortBy.value]) {
				return desc.value ? 1 : -1
			}
			if (a[sortBy.value] > b[sortBy.value]) {
				return desc.value ? -1 : 1
			}
			return 0
		}
		data.sort(sort)
	}
	if (props.paginated) {
		const start = (page.value - 1) * perPage.value
		const end = start + perPage.value
		return data.slice(start, end)
	}
	if (props.infiniteScroll) {
		const _page = 1
		const _perPage = perPage.value * page.value
		const start = (_page - 1) * _perPage
		const end = start + _perPage
		return data.slice(start, end)
	}
	return data
})

const onChangePage = (page: number) => {
	console.log('Page changed to:', page)
}

const onChangePerPage = (perPage: number) => {
	console.log('Per page changed to:', perPage)
}

function onSort(value: Record<string, any>[]): void {
	const sort = value[0]
	sortBy.value = sort?.id ?? ''
	desc.value = sort?.desc === true
}
</script>
