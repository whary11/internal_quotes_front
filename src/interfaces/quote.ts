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
    customer_id?:Number | null,
    customer: Customer | null,
    delivery_at: Date | null,
    details: Array<Requirement> | []
}

export interface ChargedAccount {
    id?:number,
    quote_id?:number,
    price: number | null,
    billing_data_id:number | null,
}