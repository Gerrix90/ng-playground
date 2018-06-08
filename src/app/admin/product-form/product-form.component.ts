import { ProductService } from './../../product.service';
import { CategoriesService } from './../../categories.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
categories$;

  constructor(categoriesService: CategoriesService, private productService: ProductService) {
   this.categories$ = categoriesService.getCategories();
  }
// create(product) to product.service.ts
 save(product) {
    this.productService.create(product);
   // console.log(product);
 }
 
ngOnInit() {
  }
}
