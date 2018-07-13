import { Component } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})

export class OrderSuccessComponent{
  orders$;

  constructor(private authService: AuthService, private orderService: OrderService) {
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
   }
}


