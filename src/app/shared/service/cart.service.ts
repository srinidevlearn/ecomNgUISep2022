import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartCount = new BehaviorSubject(0);

  get cartCount$() {
    return this._cartCount.asObservable();
  }

  set cartCount(value: number) {
    this._cartCount.next(value);
  }
  constructor() {}
}
