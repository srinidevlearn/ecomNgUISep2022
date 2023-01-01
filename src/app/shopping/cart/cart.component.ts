import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ICartDetails } from './models/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  snapshot: ActivatedRouteSnapshot;
  cartItems: ICartDetails[] = [];
  totalValue: number = 0;

  constructor(public actRoute: ActivatedRoute) {
    const { snapshot } = this.actRoute;

    this.snapshot = snapshot;
    this.cartItems = this.snapshot.data['cartItems'];
  }

  ngOnInit(): void {
   this.totalValue =  this.sumValueOfAllProuctItem();
  }

  sumValueOfAllProuctItem() {
    return this.cartItems.reduce((acc, item) => {
      return acc+  Number(item?.product?.price) * Number(item?.quantity);
    }, 0);
  }
}
