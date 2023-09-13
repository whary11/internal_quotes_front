import ApiService from "@/core/services/ApiService";
import type { ResponseApi } from "@/interfaces/general";
import type { Quote } from "@/interfaces/quote";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuoteStore = defineStore('quote', () => {
    const respCreateQuote = ref<ResponseApi|null>(null)

    
    async function saveQuote(data:Quote){
        try {
            respCreateQuote.value = null
            let resp = await ApiService.post(`/quote/create-quote`, data)
            respCreateQuote.value = resp
        } catch (error:any) {
            respCreateQuote.value = {status:false,data:[],message:error?.message}
        }
    }
    return {
        respCreateQuote,
        saveQuote
    }
})