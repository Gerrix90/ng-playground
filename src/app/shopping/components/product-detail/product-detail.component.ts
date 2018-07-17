import { ProductService } from './../../../shared/services/product.service';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent{
  
  private sub: any;
  product: Product;
  products;
  filteredProducts;
  category: string;
  cart: any;
  subscription: Subscription;
  
  constructor(
    private cartService: ShoppingCartService,
    private route: ActivatedRoute,
    private productService: ProductService,
    
  ) {
    productService.getAll()
    .switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    })

    .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ? 
      this.products.filter(p => p.category === this.category) : 
      this.products;
   });
    
   }

  addToCart() {
    this.cartService.addToCart(this.product);
      }

  }



