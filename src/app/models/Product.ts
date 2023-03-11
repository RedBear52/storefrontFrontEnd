export class Product {
    id?: number
    name: string
    price: number
    quantity: number
    url: string
    description: string

    constructor() {
        this.name = ''
        this.price = 0
        this.quantity = 1
        this.url = ''
        this.description = ''
    }
}
