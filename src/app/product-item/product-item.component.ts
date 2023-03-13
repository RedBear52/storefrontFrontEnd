import { Component, Input } from '@angular/core'
import { Product } from '../models/Product'
import { ProductService } from '../services/product.service'
import { CartService } from '../services/cart.service'

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
    @Input() product: Product
    // price: number

    constructor(
        private productService: ProductService,
        private cart: CartService
    ) {
        this.product = {
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }
    }

    addProduct(product: Product): void {
        this.cart.addProductToCart(product)
    }

    // increment() {
    //     this.product.quantity += 1
    //     this.product.price = this.product.price * this.product.quantity
    // }

    // decrement() {
    //     this.product.quantity -= 1
    // }
}
