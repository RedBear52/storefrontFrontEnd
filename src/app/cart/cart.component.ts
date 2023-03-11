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
    product: Product
    productsInCart: Product[] = []

    constructor(private cart: CartService) {
        this.product = {
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }
    }

    ngOnInit(): void {
        this.productsInCart = this.cart.getCart()
        console.log(this.productsInCart)
    }
}
