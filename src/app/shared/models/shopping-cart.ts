import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem [] = [];

 constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
   this.itemsMap = itemsMap || {};
   // get firebase product ids to display as an array- to itterate shopping-cart.component.html
    for (let productId in itemsMap) {
    let item = itemsMap[productId]; 
    this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
   }
 }

 getQuantity(product: Product) {
  const item = this.itemsMap[product.$key];
  return item ? item.quantity : 0;
 }
  
 get totalPrice() {
   let sum = 0;
   for (const productId in this.items)
   sum += this.items[productId].totalPrice;
   return sum;
 }

  // calculating the total amount in the shopping cart
  get totalItemsCount() {
    let count = 0;
    for (const productId in this.itemsMap) 
      count += this.itemsMap[productId].quantity;
      return count;
  }
} 