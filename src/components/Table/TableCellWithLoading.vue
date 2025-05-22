<template>
	<STable>
		<STableHeader>
			<STableHead
				v-for="column in columns"
				:key="column.field"
				:style="{ width: column.width }"
			>
				{{ column.label }}
			</STableHead>
		</STableHeader>
		<STableBody>
			<STableRow v-for="item in data" :key="item.id">
				<STableCell>{{ item.id }}</STableCell>
				<STableCell>{{ item.first_name }}</STableCell>
				<STableCell loading>{{ item.last_name }}</STableCell>
				<STableCell loading>{{ item.date }}</STableCell>
				<STableCell>{{ item.gender }}</STableCell>
			</STableRow>
		</STableBody>
	</STable>
</template>

<script setup lang="ts">
import {
	STable,
	STableHeader,
	STableHead,
	STableBody,
	STableRow,
	STableCell,
} from '@sutekitechid/sicoco-v3-next'

const data = [
	{
		id: 1,
		first_name: 'Steafen',
		last_name: 'Simmons',
		date: '2016-10-15',
		gender: 'Male',
	},
	{
		id: 2,
		first_name: 'John',
		last_name: 'Jacobs',
		date: '2016-12-15',
		gender: 'Male',
	},
	{
		id: 3,
		first_name: 'Mike',
		last_name: 'Gilbert',
		date: '2016-04-26',
		gender: 'Female',
	},
	{
		id: 4,
		first_name: 'Clarence',
		last_name: 'Flores',
		date: '2016-04-10',
		gender: 'Male',
	},
	{
		id: 5,
		first_name: 'Anne',
		last_name: 'Lee',
		date: '2016-12-06',
		gender: 'Female',
	},
]
const columns = [
	{ field: 'id', label: 'ID', width: '5px', numeric: true },
	{ field: 'first_name', label: 'First Name' },
	{ field: 'last_name', label: 'Last Name' },
	{ field: 'date', label: 'Date', centered: true },
	{ field: 'gender', label: 'Gender' },
]
</script>
