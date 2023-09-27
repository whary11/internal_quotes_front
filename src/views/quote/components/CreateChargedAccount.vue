<template>
    <div>
        <div class="modal fade" tabindex="-1" id="modal_create_charged_account">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <form class="modal-content" v-if="props.quote" @submit.prevent="save">
                    <div class="modal-header">
                        <h5 class="modal-title">Nueva cuenta de cobro para la cotización: <b>{{ props.quote.id }}</b> </h5>

                        <!--begin::Close-->
                        <button type="button" ref="btnCloseModal" class="btn btn-icon btn-sm btn-active-light-primary ms-2"  data-bs-dismiss="modal" aria-label="Close">
                            <i class="ki-duotone ki-cross fs-2x"><span class="path1"></span><span class="path2"></span></i>
                        </button>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1"  class="required form-label">Datos de facuración</label>
                                <Multiselect 
                                    v-model="data_save.billing_data_id" 
                                    :required="true"  
                                    placeholder="Buscar datos de facuración" 
                                    :filter-results="false"
                                    :min-chars="1"
                                    :resolve-on-load="false"
                                    :delay="0"
                                    :searchable="true"
                                    :options="async function(query) {
                                        return await billingDataStore.searchBillingDataByName(query)
                                    }"
                                />
                            </div>
                            <div class="col-md-12 mt-4">
                                <label for="exampleFormControlInput1"  class="required form-label">Valor</label>
                                <input type="number" v-model="data_save.price" class="form-control" required />
                                <small class="text-muted" v-if="data_save.price">{{ formatCurrency(data_save.price) }}</small>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { ChargedAccount, Quote } from "@/interfaces/quote";
    import { useBillingDataStore } from "@/stores/billingData"
    import { useQuoteStore } from "@/stores/quote"
    import Multiselect from "@vueform/multiselect";
    import Swal from "sweetalert2";
    import {useLoading} from 'vue3-loading-overlay';

    const props = defineProps<{ quote:Quote|null }>()
    const emits = defineEmits(['handlerSuccess'])
    const billingDataStore = useBillingDataStore()
    const quoteStore = useQuoteStore()

    const data_save = ref<ChargedAccount>({price:null,billing_data_id:null})
    const btnCloseModal = ref()
    const loader = useLoading()

    const closeModal = () => {
        btnCloseModal.value.click()
    }

    const save = async()=>{
       try {
            loader.show()
            await quoteStore.saveChargedAccount(<ChargedAccount>{...data_save.value,quote_id:props.quote.id})
            Swal.fire({
                text:<string>quoteStore.respCreateChargedAccount?.message,
                icon: quoteStore.respCreateChargedAccount?.status ? 'success' : 'warning',
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn fw-semobold btn-light-primary",
                },
            })
            if (quoteStore.respCreateChargedAccount?.status) {
                emits("handlerSuccess",quoteStore.respCreateChargedAccount)
                data_save.value = {price:null,billing_data_id:null}
                closeModal()
            }

       } catch (error:any) {
        Swal.fire({
            text: error?.message,
            icon: "warning",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
            },
        })
       }
       loader.hide()
    }
</script>

<style scoped>

</style>