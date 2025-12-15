import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  add(product: any) {
    this.cart.push(product);
    this.save();
  }

  remove(index: number) {
    this.cart.splice(index, 1);
    this.save();
  }

  save() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  load() {
    const data = localStorage.getItem('cart');
    this.cart = data ? JSON.parse(data) : [];
  }
}
