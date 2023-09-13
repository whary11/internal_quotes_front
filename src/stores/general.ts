import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore('general', () => {
    const value_per_hour = ref(20000)
    return {
        value_per_hour
    }
})