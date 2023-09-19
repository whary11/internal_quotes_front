<template>
    <div class="card">
        <div class="card-body">
            <create-charged-account :quote="<Quote>quoteSelected" @handler-success="handlerSuccess"/>
            <custom-server-table
                :headers="headers"
                :url="'/quote/list-quotes'"
            >
                <template #customer="{row}"> {{ row.customer.name }}</template>
                <template #status="{row}"> 
                    <span class="badge text-white" :style="{ backgroundColor:row.status.color}">{{ row.status.name }}</span>
                </template>
                <template #value_per_hour="{row}">
                    <span>{{ formatCurrency(row.value_per_hour) }}</span>
                </template>
                <template #total="{row}">
                    <span>{{ formatCurrency(row.total) }}</span>
                </template>
                <template #opciones="{row}">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-primary btn-icon" @click="quoteSelected = row" data-bs-toggle="modal" data-bs-target="#kt_modal_scrollable_2">
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
    import type { HeaderTable, ResponseApi } from "@/interfaces/general";
    import { ref } from "vue";
    import CreateChargedAccount from './components/CreateChargedAccount.vue'
    import type { Quote } from "@/interfaces/quote";
    const quoteSelected = ref<Quote|null>(null)
    const headers = ref<Array <HeaderTable>>([
        {label:'id', displayName:'ID'},
        {label:'customer', displayName:'Cliente'},
        {label:'status', displayName:'Estado'},
        {label:'delivery_at', displayName:'Fecha de entrega'},
        {label:'value_per_hour', displayName:'Valor hora'},
        {label:'total', displayName:'Total'},
        {label:'opciones', displayName:'Opciones'},
    ])

    const handlerSuccess = (data:ResponseApi)=>{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    }
</script>
