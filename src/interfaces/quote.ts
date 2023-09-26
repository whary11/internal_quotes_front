import type { Status } from "./general"

export interface Requirement {
    title:string | null,
    hours:number | 1,
}

export interface Customer {
    id: Number,
    name: String,
    value_per_hour: Number
}

export interface Quote {
    id?:Number,
    quote_status_id?:Number
    customer_id?:Number | null,
    customer: Customer | null,
    title: String | null,
    delivery_at?: Date | null,
    details: Array<Requirement> | []
}

export interface ChargedAccount {
    id?:number,
    quote_id?:number,
    price?: number | null,
    billing_data_id?:number | null,
    account_receivable_status_id?:number
}

export interface ChangeStatus {
    status?:Status|null,
    quote_id:Number|null,
    status_id:Number|null,
    comment?:String|null,
    account_receivable_id?:Number|null
}

