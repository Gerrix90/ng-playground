<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

=======
import { AuthService } from './../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD
=======
import { SignupComponent } from './components/signup/signup.component';
import { HeroComponent } from './components/hero/hero.component';


>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76

@NgModule({
  imports: [
    SharedModule,
<<<<<<< HEAD
    RouterModule
=======
    RouterModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76
   ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
<<<<<<< HEAD
  
  ],
  // need to export the module because its being used outside of this component. /@ app.component.html
  exports: [
    NavbarComponent
  
=======
    SignupComponent,
    HeroComponent,
  
   ],
   schemas: [ NO_ERRORS_SCHEMA ],
   providers: [AuthService],
  // need to export the module because its being used outside of this component. /@ app.component.html
  exports: [
    NavbarComponent
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76
  ]
})
export class CoreModule { }
