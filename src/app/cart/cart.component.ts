import { Component } from '@angular/core'
import { Product } from '../models/Product'
import { CartService } from '../services/cart.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    productsInCart: Product[] = []

    constructor(private cart: CartService) {}

    ngOnInit(): void {
        this.productsInCart = this.cart.getCart()
        console.log(this.productsInCart)
    }

    // getQuantity(): number {
    //     return this.product.quantity
    // }

    // getProductName(): string {
    //     return this.product.name
    // }
}
