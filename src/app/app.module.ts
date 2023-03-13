import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { HttpClientModule } from '@angular/common/http'
import { ProductItemComponent } from './product-item/product-item.component'
import { ProductComponent } from './product/product.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatBadgeModule } from '@angular/material/badge'
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component'
import { CartComponent } from './cart/cart.component'
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component'

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ProductItemComponent,
        ProductComponent,
        ProductItemDetailComponent,
        CartComponent,
        ProductItemComponent,
        CartItemComponent,
        CheckoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatBadgeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
