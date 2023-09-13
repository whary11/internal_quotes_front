export interface ResponseApi {
    status:boolean | false,
    data:any | [],
    message:string | null,
}

export interface HeaderTable {
    label?:string,
    displayName:string
}
