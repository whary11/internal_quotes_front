import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore('general', () => {
    const quote_statuses = ref<Array>([])
    const accountReceivableStatus = ref<Array>([])

    async function getStatuses(){
        if (quote_statuses.value.length == 0 || accountReceivableStatus.value.length == 0) {
            let resp = await ApiService.get(`/quote/list-statuses`)
            if (resp.status) {
                quote_statuses.value = resp.data.quoteStatuses
                accountReceivableStatus.value = resp.data.accountReceivableStatus
            }
        }
    }
    return {
        quote_statuses,
        accountReceivableStatus,
        getStatuses
    }
})