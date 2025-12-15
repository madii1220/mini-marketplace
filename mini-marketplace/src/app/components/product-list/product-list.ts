import { CartService } from './../../services/cart';
import { ProductService } from './../../services/product';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.map(product => ({ ...product, added: false }));
    });
  }

  addToCart(product: any) {
    this.cartService.add(product);
    product.added = true;
  }
}
