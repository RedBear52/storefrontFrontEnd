/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core'
import { Product } from '../models/Product'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[]
    total: number

    constructor() {
        this.cart = []
        this.total = 0
    }

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

    increment(product: Product) {
        product.quantity += 1
        return this.cart
    }

    decrement(product: Product) {
        product.quantity -= 1
        return this.cart
    }

    getCartTotal() {
        this.total = this.cart
            .map((product) => product.price * product.quantity)
            .reduce((a, b) => a + b, 0)
        return this.total
    }
}
