import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  @Input('product') product: Product;
  @Input('showActions') showActions = true;
  @Input('shoppingCart') shoppingCart: ShoppingCart;

  constructor(private auth: AuthService, private cartService: ShoppingCartService ) { }

addToCart() {
this.cartService.addToCart(this.product);
  }
  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.cartService.getCart();
     }
}
