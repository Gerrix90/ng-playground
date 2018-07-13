import { ProductsComponent } from './shopping/components/products/products.component';
import { ContactFormComponent } from './core/components/contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ProductDetailComponent } from './shopping/components/product-detail/product-detail.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: ProductsComponent },
  { path: 'product/details', component: ProductDetailComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
