/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core'
import { Product } from '../models/Product'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[]
    total: number
    cartQuantity: number

    constructor() {
        this.cart = []
        this.total = 0
        this.cartQuantity = 0
    }

    addProductToCart(product: Product): Product[] {
        console.log(product)
        if (this.cart.includes(product)) {
            return this.cart
        } else {
            this.cart.push(product)
        }
        return this.cart
    }

    removeProductFromCart(product: Product): Product[] {
        const index = this.cart.indexOf(product)
        this.cart.splice(index, 1)
        return this.cart
    }

    getCart(): Product[] {
        return this.cart
    }

    getCartQuantity() {
        this.cartQuantity = this.cart
            .map((product) => product.quantity)
            .reduce((a, b) => a + b, 0)
        return this.cartQuantity
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
