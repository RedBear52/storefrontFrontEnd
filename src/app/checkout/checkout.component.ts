import { Component } from '@angular/core'
import { CartService } from '../services/cart.service'

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartService.getCart()
    }
}
