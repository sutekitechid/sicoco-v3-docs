<template>
	<STabs>
		<STabsList>
			<STabsTrigger
				v-for="(trigger, idx) in triggers"
				:key="idx"
				:value="trigger.value"
			>
				{{ trigger.label }}
			</STabsTrigger>
		</STabsList>
		<STabsContent
			v-for="(content, idx) in contents"
			:key="idx"
			:value="content.value"
			class="text-black"
		>
			<SCard>
				<SCardContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					illum repellat et ipsam voluptatum aliquam aspernatur nostrum impedit
					dolores repudiandae, alias praesentium laudantium corporis eveniet
					eius consectetur nemo harum! Accusamus.
				</SCardContent>
			</SCard>
		</STabsContent>
	</STabs>
</template>

<script setup lang="ts">
import {
	STabs,
	STabsList,
	STabsTrigger,
	STabsContent,
	SCard,
	SCardContent,
} from '@sutekitechid/sicoco-v3-next'

const triggers = [
	{ value: 'account', label: 'Account', badgeCount: '1' },
	{ value: 'password', label: 'Password' },
	{ value: 'hahahaha', label: 'hahahaha' },
]
const contents = [
	{ value: 'account', text: 'Make changes to your account here.' },
	{ value: 'password', text: 'Change your password here.' },
	{ value: 'hahahaha', text: 'hahahaha' },
]
</script>
