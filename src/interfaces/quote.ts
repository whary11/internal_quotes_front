export interface Requirement {
    title:string | null,
    hours:number | 1,
}

export interface Quote {
    customer_id:number | null,
    delivery_at:Date | null,
    details: Array<Requirement> | []
}