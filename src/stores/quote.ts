import ApiService from "@/core/services/ApiService";
import type { ResponseApi } from "@/interfaces/general";
import type { ChangeStatus, ChargedAccount, Quote } from "@/interfaces/quote";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuoteStore = defineStore('quote', () => {
    const respCreateQuote = ref<ResponseApi|null>(null)
    const respCreateChargedAccount = ref<ResponseApi|null>(null)
    const respgetChargedAccount = ref<ResponseApi|null>(null)
    const respChangeStatusQuote = ref<ResponseApi|null>(null)
    const respChangeStatusAccount = ref<ResponseApi|null>(null)

    
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

    async function getChargedAccount(data:ChargedAccount){
        try {
            respgetChargedAccount.value = null
            let resp = await ApiService.get(`/quote/list-account-receivable`, data)
            respgetChargedAccount.value = resp
        } catch (error:any) {
            respgetChargedAccount.value = {status:false,data:[],message:error?.message}
        }
    }

    async function changeStatusQuote(data:ChangeStatus){
        try {
            respChangeStatusQuote.value = null
            let resp = await ApiService.post(`/quote/change-status-quote`, data)
            respChangeStatusQuote.value = resp
        } catch (error:any) {
            respChangeStatusQuote.value = {status:false,data:[],message:error?.message}
        }
    }

    async function changeStatusAccount(data:ChangeStatus){
        try {
            respChangeStatusAccount.value = null
            let resp = await ApiService.post(`/quote/change-status-account-receivable`, data)
            respChangeStatusAccount.value = resp
        } catch (error:any) {
            respChangeStatusAccount.value = {status:false,data:[],message:error?.message}
        }
    }

    return {
        respCreateQuote,
        respCreateChargedAccount,
        respgetChargedAccount,
        respChangeStatusQuote,
        respChangeStatusAccount,
        saveQuote,
        saveChargedAccount,
        getChargedAccount,
        changeStatusQuote,
        changeStatusAccount
    }
})