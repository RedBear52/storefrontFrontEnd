/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core'
import { Product } from '../models/Product'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[] = []

    constructor() {}

    addProductToCart(product: Product): Product[] {
        // alert(`${product.name} has been added to the cart`)
        this.cart.push(product)
        return this.cart
    }

    getCart(): Product[] {
        return this.cart
    }

    getCartQuantity() {
        console.log(this.cart.length)
        return this.cart.length
    }
}
