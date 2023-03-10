import { Component } from '@angular/core'
import { Product } from '../models/Product'
import { ProductListService } from '../services/product-list.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    title = 'Product List'
    products: Product[] = []

    constructor(private productListService: ProductListService) {}

    ngOnInit(): void {
        this.productListService.getProducts().subscribe((res) => {
            this.products = res as Product[]
        })
    }
}
