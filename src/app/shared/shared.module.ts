import { FormsModule } from '@angular/forms';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductService } from './services/product.service';
import { CategoriesService } from './services/categories.service';
import { UserService } from './services/user.service';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from 'shared/services/auth.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    MDBBootstrapModule.forRoot(),
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  
  ],
  // export all modules to all other components
exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CommonModule,
    CustomFormsModule,
    MDBBootstrapModule.forRoot().ngModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
],
providers: [
  AuthService, 
  AuthGuard, 
  UserService, 
  CategoriesService, 
  ProductService, 
  ShoppingCartService, 
  OrderService
]
})
export class SharedModule { }
