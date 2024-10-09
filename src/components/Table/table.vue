<template>
    <STable 
        :stripped="true" 
        :scrollable="true" 
        :fullwidth="true" 
        :hoverable="true"
        :topHorizontalScroll="true"
    >
        <STableHead>
                <STableHeadCell 
                    v-for="column in columns" 
                    :key="column.field" 
                    :style="{ width: column.width }"
                >
                    {{ column.label }}
                </STableHeadCell>
        </STableHead>
        <STableBody>
            <STableRow 
                v-for="item in data" 
                :key="item.id"
            >
                <STableCell>{{ item.id }}</STableCell>
                <STableCell>{{ item.first_name }}</STableCell>
                <STableCell>{{ item.last_name }}</STableCell>
                <STableCell>{{ item.date }}</STableCell>
                <STableCell>{{ item.gender }}</STableCell>
            </STableRow>
        </STableBody>
    </STable>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { 'id': 1, 'first_name': 'Steafen', 'last_name': 'Simmons', 'date': '2016-10-15', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Mike', 'last_name': 'Gilbert', 'date': '2016-04-26', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06', 'gender': 'Female' }
            ],
            columns: [
                { field: 'id', label: 'ID', width: '5px', numeric: true },
                { field: 'first_name', label: 'First Name' },
                { field: 'last_name', label: 'Last Name' },
                { field: 'date', label: 'Date', centered: true },
                { field: 'gender', label: 'Gender' }
            ]
        }
    }
}
</script>
