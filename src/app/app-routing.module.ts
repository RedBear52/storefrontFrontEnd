import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductComponent } from './product/product.component'
import { ProductItemComponent } from './product-item/product-item.component'
import { CartComponent } from './cart/cart.component'
import { CheckoutComponent } from './checkout/checkout.component'

const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product-item', component: ProductItemComponent },
    { path: 'checkout', component: CheckoutComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
