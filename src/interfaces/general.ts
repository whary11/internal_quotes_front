export interface ResponseApi {
    status:boolean | false,
    data:any | [],
    message:string | null,
}

export interface HeaderTable {
    label:string,
    displayName:string
}


export interface Status {
    id:Number,
    name:string,
    color:string,
    mandatory_comment:Number,
    next_statuses:[any],
}
