import { Component } from '@angular/core'
import { CartService } from '../services/cart.service'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
    badgeNum: number

    constructor(private cartService: CartService) {
        this.badgeNum = this.cartService.getCartQuantity()
        console.log(this.badgeNum)
    }

    ngOnInit() {
        this.cartService.getCartQuantity()
        console.log(this.badgeNum)
    }

    // incrementBadgeNum() {
    //     this.badgeNum++
    // }
}
