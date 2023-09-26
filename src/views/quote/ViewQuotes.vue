<template>
    <div class="card">
        <div class="card-body">
            <create-charged-account :quote="<Quote>quoteSelected" />
            <list-charged-account :quote="<Quote>quoteSelected" />
            <change-status-quote :quote="<Quote>quoteSelected" ref="modalChangeStatus" @handler-success="refreshTable" />
            <custom-server-table
                :headers="headers"
                :url="'/quote/list-quotes'"
                ref="refCustomTable"
            >
                <template #customer="{row}"> {{ row.customer.name }}</template>
                <template #status="{row}"> 
                    
                    <span 
                        class="badge text-white" 
                        :style="{ backgroundColor:row.status.color, cursor:'pointer'}"
                        @click="handlerModalChangeStatus(row)"
                        data-bs-toggle="modal" 
                        data-bs-target="#modal_change_status_quote"
                        v-permission="{showAll:true, permissions:['cambiar_estado_de_la_cotizacion'],documentation:['Cambiar estado de cotización']}" 
                    >
                        <span>{{ row.status.name }}</span>
                        <span class="ms-2"><i class="fa-solid fa-pencil text-white fs-8"></i></span>
                        
                    </span>
                    
                </template>
                <template #value_per_hour="{row}">
                    <span>{{ formatCurrency(row.value_per_hour) }}</span>
                </template>
                <template #total="{row}">
                    <span>{{ formatCurrency(row.total) }}</span>
                </template>
                <template #opciones="{row}">
                    <div class="btn-group">
                        <button 
                            class="btn btn-sm btn-primary btn-icon" 
                            v-permission="{showAll:true, permissions:['crear_cuanta_cobro'],documentation:['Crear cuanta de cobro']}" 
                            @click="quoteSelected = row" 
                            data-bs-toggle="modal" 
                            data-bs-target="#modal_create_charged_account"
                        >
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </button>
                        <button 
                            class="btn btn-sm btn-info btn-icon"
                            v-permission="{showAll:true, permissions:['ver_cuantas_cobro'],documentation:['Ver cuantas de cobro']}" 
                            @click="handlerOpenListCharged(row)"
                            data-bs-toggle="modal" 
                            data-bs-target="#modal_list_charged_account"
                        >
                            <i class="fa-solid fa-binoculars"></i>
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
    import ListChargedAccount from "./components/ListChargedAccount.vue";
    import ChangeStatusQuote from "./components/ChangeStatusQuote.vue";
    import { useQuoteStore } from "@/stores/quote"
    import { useGeneralStore } from "@/stores/general"
    import {useLoading} from 'vue3-loading-overlay';
    import type { Quote } from "@/interfaces/quote";

    const quoteSelected = ref<Quote|null>(null)
    const modalChangeStatus = ref()
    const refCustomTable = ref()
    const quoteStore = useQuoteStore()
    const generalStore = useGeneralStore()
    const loader = useLoading()

    const headers = ref<Array <HeaderTable>>([
        {label:'id', displayName:'ID'},
        {label:'customer', displayName:'Cliente'},
        {label:'status', displayName:'Estado'},
        {label:'title', displayName:'Titulo'},
        {label:'value_per_hour', displayName:'Valor hora'},
        {label:'total', displayName:'Total'},
        {label:'opciones', displayName:'Opciones'},
    ])

    const handlerOpenListCharged = async (quote:Quote)=>{
        quoteSelected.value = quote
        loader.show()
        try {
            await quoteStore.getChargedAccount({quote_id:<number>quote.id})
        } catch (error) {
        } 
        loader.hide()
    }

    const handlerModalChangeStatus = async(quote:Quote) =>{
        quoteSelected.value = quote
        loader.show()
        try {
            await generalStore.getStatuses()
        } catch (error) {
        } 
        loader.hide()
    }
    
    const refreshTable = () => {
        refCustomTable.value.refresh()
    }
</script>
