import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../models/Product'

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
    @Input() product: Product
    @Output() addToCart: EventEmitter<Product> = new EventEmitter()

    constructor() {
        this.product = {
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }
    }
}
