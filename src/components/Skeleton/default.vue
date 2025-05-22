<template>
	<div
		class="w-full flex flex-col items-center p-4 bg-slate-300 dark:bg-gray-900 not-content"
	>
		<div class="w-3/4 gap-x-4 flex flex-row items-center">
			<SSkeleton class="w-20 h-20 rounded-full" />
			<div class="flex flex-grow flex-col px-2 gap-y-2">
				<SSkeleton
					v-for="i in 5"
					:class="i % 2 == 0 ? 'w-full' : 'w-11/12'"
					class="h-3 rounded-x-lg"
				/>
			</div>
		</div>

		<div class="w-3/4 gap-x-4 flex flex-row items-center mt-4">
			<div class="flex flex-grow flex-col px-2 gap-y-2">
				<SSkeleton
					v-for="i in 5"
					:class="i % 2 == 0 ? 'w-full' : 'w-11/12'"
					class="h-3 rounded-x-lg"
				/>
			</div>
			<SSkeleton class="w-20 h-20 rounded" />
		</div>
	</div>
</template>

<script setup>
import { SSkeleton } from '@sutekitechid/sicoco-v3-next'
</script>
