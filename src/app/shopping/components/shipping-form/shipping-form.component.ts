import { ShoppingCart } from 'shared/models/shopping-cart';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Shipping } from 'shared/models/shipping';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping: Shipping;
  userSuscription: Subscription;
  userId: string;
 

constructor(private router: Router,
    private orderService: OrderService, 
    private authServive: AuthService) {  }

  ngOnInit() {
    this.userSuscription = this.authServive.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
   this.userSuscription.unsubscribe();
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
    } 
}
