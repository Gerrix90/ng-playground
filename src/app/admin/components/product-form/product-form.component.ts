import { ProductService } from 'shared/services/product.service';
import { CategoriesService } from 'shared/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
categories$;
product = {};
id;
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoriesService: CategoriesService, 
    private productService: ProductService) {
   this.categories$ = categoriesService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
   // unsubcribe with take() 
   if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

// create(product) to product.service.ts
 save(product) {
   if (this.id) this.productService.update(this.id, product);
     else this.productService.create(product);

     this.router.navigate(['admin/products']);
    console.log(this.product);
 }

 delete() {
   if (!confirm('Are you sure you want to delete this product?')) return; 

     this.productService.delete(this.id);
     this.router.navigate(['admin/products']);
   }

ngOnInit() {
  }
}
