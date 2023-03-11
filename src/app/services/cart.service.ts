import { Injectable } from '@angular/core'
import { Product } from '../models/Product'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    product: Product
    cart: Product[] = []

    constructor() {
        this.product = {
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }
    }

    addProductToCart(product: Product): void {
        console.log(product)

        alert(`${product.name} has been added to the cart`)
        this.cart.push(product)
    }

    getCart(): Product[] {
        return this.cart
    }
}
