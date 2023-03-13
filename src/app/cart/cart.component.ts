/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core'
import { Product } from '../models/Product'
import { CartService } from '../services/cart.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    cartQuantity: number
    productsInCart: Product[] = []
    cartTotal: number

    constructor(private cart: CartService) {
        this.cartQuantity = 0
        this.cartTotal = 0
    }

    ngOnInit(): void {
        this.productsInCart = this.cart.getCart()
        this.cartQuantity = this.productsInCart.length
        this.cartTotal = this.cart.getCartTotal()
    }

    increment(product: Product) {
        this.cart.increment(product)
        this.cart.getCartTotal()
    }

    decrement(product: Product) {
        if (product.quantity >= 1) {
            this.cart.decrement(product)
            this.cart.getCartTotal()
        }
    }

    getCartTotal() {
        this.cartTotal = this.cart.getCartTotal()
    }
}
