import ApiService from "@/core/services/ApiService";
import type { ResponseApi } from "@/interfaces/general";
import type { ChargedAccount, Quote } from "@/interfaces/quote";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuoteStore = defineStore('quote', () => {
    const respCreateQuote = ref<ResponseApi|null>(null)
    const respCreateChargedAccount = ref<ResponseApi|null>(null)

    
    async function saveQuote(data:Quote){
        try {
            respCreateQuote.value = null
            let resp = await ApiService.post(`/quote/create-quote`, data)
            respCreateQuote.value = resp
        } catch (error:any) {
            respCreateQuote.value = {status:false,data:[],message:error?.message}
        }
    }

    async function saveChargedAccount(data:ChargedAccount){
        try {
            respCreateChargedAccount.value = null
            let resp = await ApiService.post(`/quote/create-account-receivable`, data)
            respCreateChargedAccount.value = resp
        } catch (error:any) {
            respCreateChargedAccount.value = {status:false,data:[],message:error?.message}
        }
    }

    return {
        respCreateQuote,
        respCreateChargedAccount,
        saveQuote,
        saveChargedAccount
    }
})