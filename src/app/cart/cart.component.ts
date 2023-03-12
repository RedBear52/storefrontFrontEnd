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

    constructor(private cart: CartService) {
        this.cartQuantity = 0
    }

    ngOnInit(): void {
        this.productsInCart = this.cart.getCart()
        console.log(this.productsInCart)
    }
}
