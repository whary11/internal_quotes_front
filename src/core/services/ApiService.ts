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
        let responseJson = await response.json();
        if (response.ok) {
            if (responseJson.code === 401) {
                // noAuth() no auth
            }
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
            // body: JSON.stringify(data) ,
            headers: headers
        });
        let responseJson = await response.json();
        if (response.ok) {
            if (responseJson.code === 401) {
                // noAuth() no auth
            }
            return responseJson;
        } else {
            return responseJson;
        }
    } catch (error) {
        return `${error} ${route}`
    }
  }

  // /**
  //  * @description initialize vue axios
  //  */
  // public static init(app: App<Element>) {
  //   ApiService.vueInstance = app;
  //   ApiService.vueInstance.use(VueAxios, axios);
  //   ApiService.vueInstance.axios.defaults.baseURL =
  //     import.meta.env.VITE_APP_API_URL;
  // }

  // /**
  //  * @description set the default HTTP request headers
  //  */
  // public static setHeader(): void {
  //   ApiService.vueInstance.axios.defaults.headers.common[
  //     "Authorization"
  //   ] = `Token ${JwtService.getToken()}`;
  //   ApiService.vueInstance.axios.defaults.headers.common["Accept"] =
  //     "application/json";
  // }

  // /**
  //  * @description send the GET HTTP request
  //  * @param resource: string
  //  * @param params: AxiosRequestConfig
  //  * @returns Promise<AxiosResponse>
  //  */
  // public static query(resource: string, params: any): Promise<AxiosResponse> {
  //   return ApiService.vueInstance.axios.get(resource, params);
  // }

  // /**
  //  * @description send the GET HTTP request
  //  * @param resource: string
  //  * @param slug: string
  //  * @returns Promise<AxiosResponse>
  //  */
  // public static get(
  //   resource: string,
  //   slug = "" as string
  // ): Promise<AxiosResponse> {
  //   return ApiService.vueInstance.axios.get(`${resource}/${slug}`);
  // }

  // /**
  //  * @description set the POST HTTP request
  //  * @param resource: string
  //  * @param params: AxiosRequestConfig
  //  * @returns Promise<AxiosResponse>
  //  */
  // public static post(resource: string, params: any): Promise<AxiosResponse> {
  //   return ApiService.vueInstance.axios.post(`${resource}`, params);
  // }

  // /**
  //  * @description send the UPDATE HTTP request
  //  * @param resource: string
  //  * @param slug: string
  //  * @param params: AxiosRequestConfig
  //  * @returns Promise<AxiosResponse>
  //  */
  // public static update(
  //   resource: string,
  //   slug: string,
  //   params: any
  // ): Promise<AxiosResponse> {
  //   return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params);
  // }

  // /**
  //  * @description Send the PUT HTTP request
  //  * @param resource: string
  //  * @param params: AxiosRequestConfig
  //  * @returns Promise<AxiosResponse>
  //  */
  // public static put(resource: string, params: any): Promise<AxiosResponse> {
  //   return ApiService.vueInstance.axios.put(`${resource}`, params);
  // }

  // /**
  //  * @description Send the DELETE HTTP request
  //  * @param resource: string
  //  * @returns Promise<AxiosResponse>
  //  */
  // public static delete(resource: string): Promise<AxiosResponse> {
  //   return ApiService.vueInstance.axios.delete(resource);
  // }
}

export default ApiService;
