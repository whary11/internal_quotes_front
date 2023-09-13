<template>
    <div class="card">
        <div class="card-body">
            <custom-server-table
                :headers="headers"
                :url="'/quote/list-quotes'"
            >
                <template #customer="{row}"> {{ row.customer.name }}</template>
                <template #status="{row}"> 
                    <span class="badge text-white" :style="{ backgroundColor:row.status.color}">{{ row.status.name }}</span>
                </template>
                <template #opciones="{row}">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-primary btn-icon" >
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </button>
                        <button class="btn btn-sm btn-info btn-icon">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </button>
                    </div>
                </template>
            </custom-server-table>
        </div>
    </div>
</template>

<script setup lang="ts">
    import CustomServerTable from "@/components/customTable/CustomServerTable.vue";
    import type { HeaderTable } from "@/interfaces/general";
import type { Row } from "read-excel-file";
    import { ref } from "vue";
    const headers = ref<Array <HeaderTable>>([
        {label:'id', displayName:'ID'},
        {label:'customer', displayName:'Cliente'},
        {label:'status', displayName:'Estado'},
        {label:'delivery_at', displayName:'Fecha de entrega'},
        {label:'opciones', displayName:'Opciones'},
    ])
</script>

<style scoped>

</style>