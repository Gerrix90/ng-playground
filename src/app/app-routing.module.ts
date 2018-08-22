<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
=======
import { ContactFormComponent } from './core/components/contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';

>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76

import { LoginComponent } from './core/components/login/login.component';
import { ProductsComponent } from './shopping/components/products/products.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
];
=======
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
  ];
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
