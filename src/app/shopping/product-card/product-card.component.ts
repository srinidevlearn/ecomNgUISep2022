import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  IProductTable,
  IShoppingInfo,
} from 'src/app/prod-management/prod-table/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card2.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  defaultQty = 0;

  productData!: IShoppingInfo;

  @Output() updatedProductInfo = new EventEmitter();

  @Input() set productInfo(value: IShoppingInfo) {
    if (value) {
      this.defaultQty = value?.qty;
      this.productData = { ...value };
    }
  }

  constructor() {}

  ngOnInit(): void {}

  decreaseQty() {
    if (this.defaultQty <= 0) this.defaultQty = 0;
    else {
      this.defaultQty = this.defaultQty - 1;
    }
    this.updateProductInfoFn();
  }
  increaseQty() {
    if (this.defaultQty > 5) this.defaultQty = 5;
    else {
      this.defaultQty = this.defaultQty + 1;
    }
    this.updateProductInfoFn();
  }

  updateProductInfoFn() {
    this.updatedProductInfo.emit({ ...this.productData, qty: this.defaultQty });
  }
}
