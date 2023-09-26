import type { App } from "vue";
import type { AxiosResponse } from "axios";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/JwtService";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
    /**
     * @description property to share vue instance
     */
    public static vueInstance: App;


    public static async post(route: String,data:any = {}){
        let headers = {
            'Authorization':`Bearer ${JwtService.getToken()}`
        };
        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json'
            data = JSON.stringify(data)
        } 
        try {
            let response = await fetch(`${import.meta.env.VITE_APP_API_URL}${route}`, {
                method: 'POST',
                body: data,
                headers: headers
            });
            if (response.status === 401) {
                return this.noAuth() //no auth
            }
            let responseJson = await response.json();
            if (response.ok) {
                return responseJson;
            } else {
                return responseJson;
            }
        } catch (error) {
            return error
        }
    }

    public static async get(route: String,params:any = {}){
        let headers = {
            'Authorization':`Bearer ${JwtService.getToken()}`,
            'Content-Type':'application/json'
        };
        // Convierte el objeto en una cadena de consulta (query string)
        const queryString = new URLSearchParams(params).toString();
        try {
            let response = await fetch(`${import.meta.env.VITE_APP_API_URL}${route}?${queryString}`, {
                method: 'GET',
                headers: headers
            });
            if (response.status === 401) {
                return this.noAuth()
            }
            let responseJson = await response.json();
            if (response.ok) {
                return responseJson;
            } else {
                return responseJson;
            }
        } catch (error) {
            return `${error} ${route}`
        }
    }

    public static noAuth() {
        window.localStorage.removeItem('user')
        JwtService.destroyToken()
        window.location.reload()
    }

}

export default ApiService;
