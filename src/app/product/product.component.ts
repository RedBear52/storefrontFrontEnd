import { Component } from '@angular/core'
import { Product } from '../models/Product'
import { CartService } from '../services/cart.service'
import { ProductService } from '../services/product.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent {
    title = 'Product List'
    products: Product[] = []

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe((res) => {
            for (let index = 0; index < res.length; index++) {
                const product = res[index]
                product['quantity'] += 1
            }
            this.products = res as Product[]
        })
    }
}
