import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";

export const useBillingDataStore = defineStore('billingData', () => {

    async function searchBillingDataByName(search:String){
        let resp = await ApiService.get(`/billing-data/query-search`, {search})
        return resp.data.map(item => { return {label:item.name,value:item.id} } )
    }
    return {
        searchBillingDataByName
    }
})