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
    cartTotalString: string

    constructor(private cart: CartService) {
        this.cartQuantity = 0
        this.cartTotal = 0
        this.cartTotalString = ''
    }

    ngOnInit(): void {
        this.productsInCart = this.cart.getCart()
        this.cartQuantity = this.cart.getCartQuantity()
        this.cartTotal = this.cart.getCartTotal()
        this.cartTotalString = this.cartTotal.toFixed(2)
    }

    increment(product: Product) {
        console.log(product.quantity)
        this.cart.increment(product)
        console.log(product.quantity)
        this.cart.addProductToCart(product)
        console.log(product.quantity)
        this.cartTotal = this.cart.getCartTotal()
        console.log(this.cart.getCartTotal())
        this.cartTotalString = this.cartTotal.toFixed(2)
    }

    decrement(product: Product) {
        if (product.quantity > 1) {
            console.log(product.quantity)
            this.cart.decrement(product)
            console.log(product.quantity)
            this.cart.getCartTotal()
            console.log(this.cart.getCartTotal())
        } else if (product.quantity === 1) {
            this.cart.removeProductFromCart(product)
        }
        this.cartTotal = this.cart.getCartTotal()
        this.cartTotalString = this.cartTotal.toFixed(2)
    }

    getCartTotal() {
        this.cartTotal = this.cart.getCartTotal()
    }
}
