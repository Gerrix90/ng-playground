import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit, OnDestroy {

  error: any;

  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSuscription: Subscription;
  userId: string;
  uid: string;

  constructor(private auth: AuthService ) {
}

onSubmit(form: NgForm) {

  const email = form.value.email;
  const password = form.value.password;

  this.auth.loginEmail(email, password);
}

login() {
  this.auth.login();
  }

  ngOnInit() {
    this.userSuscription = this.auth.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
   this.userSuscription.unsubscribe();
  } 

}

