import { ProductService } from './../../../shared/services/product.service';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent{
  
  private sub: any;
  product: Product;
  
  constructor(
    private cartService: ShoppingCartService,
    private route: ActivatedRoute,
    private productService: ProductService,
    
  ) { }

  addToCart() {
    this.cartService.addToCart(this.product);
      }

     
    
    
}



