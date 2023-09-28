<template>
    <div>
    <button hidden data-bs-toggle="modal" data-bs-target="#modal_list_charged_account" ref="btnOpenModalListAccount"></button>
        <div class="modal fade"  tabindex="-1" id="modal_list_charged_account" data-bs-backdrop="static">
            <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered" >
                <div class="modal-content" v-if="props.quote" >
                    <div class="modal-header">
                        <h5 class="modal-title">Cuentas de cobro de la cotización: <b>{{ props.quote.id }}</b> </h5>

                        <!--begin::Close-->
                        <button type="button" class="btn btn-icon btn-sm btn-active-light-primary ms-2"  data-bs-dismiss="modal" aria-label="Close">
                            <i class="ki-duotone ki-cross fs-2x"><span class="path1"></span><span class="path2"></span></i>
                        </button>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12 mt-4 table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Valor</th>
                                            <th>Facturado a</th>
                                            <th>Estado</th>
                                            <th>Fecha de creación</th>
                                            <th>Fecha de pago</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr v-for="(item, index) in quoteStore.respgetChargedAccount?.data.data" :key="index">
                                            <td>{{ item.id }}</td>
                                            <td>{{ formatCurrency(item.price) }}</td>
                                            <td>{{ item.billing_data?.name }}</td>
                                            <td>
                                                <span 
                                                    class="badge text-white" 
                                                    :style="{ backgroundColor:item.account_receivable_status?.color, cursor:'pointer'}"
                                                    @click="handlerModalChangeStatus(item)"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modal_change_status_charged_account"
                                                    v-permission="{showAll:true, permissions:['cambiar_estado_de_la_cuenta_de_cobro'],documentation:['Cambiar estado de la cuenta de cobro']}" 
                                                >
                                                    {{ item.account_receivable_status?.name }}
                                                    <span class="ms-2"><i class="fa-solid fa-pencil text-white fs-8"></i></span>
                                                </span>
                                            </td>
                                            <td>{{ item.format_created_at }}</td>
                                            <td>{{ item.paid_at ?? 'N/A' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <change-status-quote-charged-account @handler-close-modal="handlerCloseModalChangeStatusAccount" @handler-success="refresh" :chargedAccount="<ChargedAccount>chargedAccountSelected"/>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { ChargedAccount, Quote } from "@/interfaces/quote";
    import { useQuoteStore } from "@/stores/quote"
    import { useGeneralStore } from "@/stores/general"
    import {useLoading} from 'vue3-loading-overlay';
    import ChangeStatusQuoteChargedAccount from './ChangeStatusQuoteChargedAccount.vue';

    const props = defineProps<{ quote:Quote|null }>()
    const emits = defineEmits(['handlerSuccess'])
    const quoteStore = useQuoteStore()
    const generalStore = useGeneralStore()
    const btnOpenModalListAccount = ref()


    const chargedAccountSelected = ref<ChargedAccount|null>(null)
    const loader = useLoading()
    const openModal = ()=>{
        btnOpenModalListAccount.value.click()
    }
    const handlerCloseModalChangeStatusAccount = () => {
        openModal()
    }
    const handlerModalChangeStatus = async(ChargedAccount:ChargedAccount) =>{
        chargedAccountSelected.value = ChargedAccount
        loader.show()
        try {
            await generalStore.getStatuses()
        } catch (error) {
        } 
        loader.hide()
    }
    const refresh = async ()=>{
        loader.show()
        try {
            await quoteStore.getChargedAccount({quote_id:<number>props.quote?.id})
        } catch (error) {
        } 
        loader.hide()
    }
</script>

<style scoped>

</style>