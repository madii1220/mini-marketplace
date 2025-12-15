import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  template: `
    <div>
      {{ item.title }}
      <button (click)="remove.emit()">Remove</button>
    </div>
  `,
})
export class CartItemComponent {
  @Input() item: any;
  @Output() remove = new EventEmitter<void>();
}
