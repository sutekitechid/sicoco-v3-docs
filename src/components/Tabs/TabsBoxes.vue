<template>
	<STabs :default-value="triggers[0].value" :variant="tabsVariant">
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
					{{ content.text }}
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

const tabsVariant = 'boxes'

const triggers = [
	{ value: 'account', label: 'Account' },
	{ value: 'password', label: 'Password' },
	{ value: 'security', label: 'Security' },
]

const contents = [
	{ value: 'account', text: 'Make changes to your account here.' },
	{ value: 'password', text: 'Change your password here.' },
	{ value: 'security', text: 'Your security settings go here.' },
]
</script>
