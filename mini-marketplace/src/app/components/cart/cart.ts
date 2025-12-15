import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from './../../services/cart';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
  imports: [CommonModule]
})
export class CartComponent {

  constructor(public CartService: CartService) {}

  getTotal(): number {
    return this.CartService.cart.reduce((sum, item) => sum + item.price, 0);
  }
}
