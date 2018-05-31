import { CategoriesService } from './../../categories.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
categories$;

  constructor(categoriesService: CategoriesService) {
   this.categories$ = categoriesService.getCategories();
  }

 save(product) {
   console.log(product);
 }

  ngOnInit() {
  }
}
