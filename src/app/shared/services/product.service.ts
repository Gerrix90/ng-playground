import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


// Saving Products in firebase database service

@Injectable()
export class ProductService {

 // Inject the database firebase object
  constructor(private db: AngularFireDatabase) { }

  // From the product-form.component we push into firebase
     create(product) {
        return this.db.list('/products').push(product);
       // console.log(product);
       } 
       getAll() {
         return this.db.list('/products');
       }

       get(productId) {
         return this.db.object('/products/' + productId);
       }

      update(productId, product) {
        return this.db.object('/products/' + productId).update(product);
      }

      delete(productId) {
        return this.db.object('/products/' + productId).remove();
      }
      // new JULY
      getProductById(key: string) {
        this.db.object('products/' + key);
        }

    }
