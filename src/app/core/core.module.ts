import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
   ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
  
  ],
  // need to export the module because its being used outside of this component. /@ app.component.html
  exports: [
    NavbarComponent
  
  ]
})
export class CoreModule { }
