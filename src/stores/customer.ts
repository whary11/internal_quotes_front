import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore('customer', () => {

    async function searchCustomerByName(search:String){
        let resp = await ApiService.get(`/customer/query-customer`, {search})
        return resp.data.map(item => { return {label:item.name,value:item.id} } )
    }
    return {
        searchCustomerByName
    }
})