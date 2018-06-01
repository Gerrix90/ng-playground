import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


// Saving Products in firebase database service

@Injectable()
export class ProductService {

 // Inject the database firebase object
  constructor(private db: AngularFireDatabase) { }

  // From the product-form.component we push into firebase
     create(product) {
       return this.db.list('/products').push('product');
       }
}
