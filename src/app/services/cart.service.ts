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
            quantity: 1,
            url: '',
            description: '',
        }
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
}
