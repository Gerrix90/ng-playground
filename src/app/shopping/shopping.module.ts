import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFilterComponent } from 'app/shopping/components/products/product-filter/product-filter.component';
import { ShippingFormComponent } from 'app/shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from 'app/shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
<<<<<<< HEAD
=======

>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
<<<<<<< HEAD
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
=======
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
  ]
})
export class ShoppingModule { }
