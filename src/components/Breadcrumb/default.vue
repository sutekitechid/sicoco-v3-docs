<template>
	<div class="flex flex-wrap gap-4 mt-4">
		<SBreadcrumb>
			<SBreadcrumbItem v-for="item in labels" :to="item.href">{{
				item.name
			}}</SBreadcrumbItem>
		</SBreadcrumb>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { SBreadcrumb, SBreadcrumbItem } from '@sutekitechid/sicoco-v3-next'

const labels = ref([
	{
		name: 'Home',
		href: '/sicoco-v3-docs',
	},
	{
		name: 'Breadcrumb',
		href: '#',
	},
	{
		name: 'API Reference',
		href: '#api',
	},
])
</script>

<style>
.sl-markdown-content li {
	@apply !mt-0;
}
</style>
