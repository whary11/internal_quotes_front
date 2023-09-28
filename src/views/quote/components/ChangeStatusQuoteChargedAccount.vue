<template>
    <div >
        <div class="modal fade" tabindex="-1" id="modal_change_status_charged_account" ref="refContainer" >
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" >
                <form class="modal-content" v-if="props.chargedAccount" @submit.prevent="save">
                    <div class="modal-header">
                        <h5 class="modal-title">Cambiar estado de la cuenta de cobro: <b>{{ props.chargedAccount.id }}</b> </h5>

                        <button type="button" hidden data-bs-dismiss="modal" ref="btnCloseModalChangeStatusAccount"  aria-label="Close"></button>
                        <!--begin::Close-->
                        <button type="button" @click="closeModal" class="btn btn-icon btn-sm btn-active-light-primary ms-2"  >
                            <i class="ki-duotone ki-cross fs-2x"><span class="path1"></span><span class="path2"></span></i>
                        </button>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1"  class="required form-label">Selecciona un estado</label>
                                <!-- valueProp="id" -->
                                <Multiselect 
                                    v-model="data_save.status" 
                                    :required="true"  
                                    placeholder="Selecciona una opción" 
                                    :searchable="false" 
                                    :allow-empty="false"
                                    :options="statuses"
                                />
                            </div>
                            <div class="col-md-12 mt-4">
                                <label for="exampleFormControlInput1"  :class="['form-label', data_save.status?.mandatory_comment == 1 ? 'required' : '' ]">Comentarios</label>
                                <textarea class="form-control" v-model="data_save.comment" rows="2" :required="data_save.status?.mandatory_comment == 1 ? true : false"></textarea>
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
    import { ref, watchEffect } from 'vue';
    import type { ChargedAccount } from "@/interfaces/quote";
    import type { Status } from "@/interfaces/general"
    import { useQuoteStore } from "@/stores/quote"
    import { useGeneralStore } from "@/stores/general"
    import Multiselect from "@vueform/multiselect";
    import Swal from "sweetalert2";
    import {useLoading} from 'vue3-loading-overlay';

    const props = defineProps<{ chargedAccount:ChargedAccount|null }>()
    const emits = defineEmits(['handlerSuccess','handlerCloseModal'])
    const quoteStore = useQuoteStore()
    const generalStore = useGeneralStore()
    const refContainer = ref(null)
    const btnCloseModalChangeStatusAccount = ref()
    const data_save = ref<any>({status_id:null,status:null,account_receivable_id:props?.chargedAccount?.id ?? null})
    const loader = useLoading()
    const statuses = ref<[Status]|[]>([])

    watchEffect(()=>{
        if (props.chargedAccount) {
            let findStatuses = generalStore.accountReceivableStatus.find(item => item.id == props.chargedAccount?.account_receivable_status_id)
            if (findStatuses) {
                statuses.value = findStatuses.next_statuses.map(item => { return {label:item.name,value:item} })
            }
        }
    })

    watchEffect(()=>{
        if (data_save.value.status) {
            data_save.value.status_id = data_save.value.status.id
        }
    })

    const closeModal = () => {
        btnCloseModalChangeStatusAccount.value.click()
        emits('handlerCloseModal')
    }
    const save = async()=>{
        try {
            loader.show({
                container:refContainer.value
            })
            data_save.value.account_receivable_id = props?.chargedAccount?.id ?? null
            
            await quoteStore.changeStatusAccount(data_save.value)
            Swal.fire({
                text:<string>quoteStore.respChangeStatusAccount?.message,
                icon: quoteStore.respChangeStatusAccount?.status ? 'success' : 'warning',
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn fw-semobold btn-light-primary",
                },
            })
            if (quoteStore.respChangeStatusAccount?.status) {
                emits("handlerSuccess",quoteStore.respChangeStatusAccount)
                data_save.value = {status_id:null,quote_id:null, comment:null}
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