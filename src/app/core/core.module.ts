import { AuthService } from './../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeroComponent } from './components/hero/hero.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
   ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeroComponent,
  
   ],
   schemas: [ NO_ERRORS_SCHEMA ],
   providers: [AuthService],
  // need to export the module because its being used outside of this component. /@ app.component.html
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
