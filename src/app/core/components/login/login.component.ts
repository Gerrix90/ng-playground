import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


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
  items: FirebaseListObservable<any[]>;
  msgVal: string;

   modalForm: FormGroup;
 
  constructor(private auth: AuthService,  public fb: FormBuilder ) {
     this.modalForm = fb.group({
      modalFormNameEx: ['', Validators.required],
      modalFormEmailEx: ['', [Validators.email, Validators.required]],
      modalFormSubjectEx: ['', Validators.required],
      modalFormTextEx: ['', Validators.required]
    }); 
}

onSubmit(form: NgForm) {

  const email = form.value.email;
  const password = form.value.password;

  this.auth.loginEmail(email, password);
}

login() {
  this.auth.login();
  }

   loginAnonymous() {
    this.auth.loginAnonymous();
  } 

  ngOnInit() {
    this.userSuscription = this.auth.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
   this.userSuscription.unsubscribe();
  } 

   Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
} 

}

