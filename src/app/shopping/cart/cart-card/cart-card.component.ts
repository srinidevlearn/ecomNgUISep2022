import { Component, Input, OnInit } from '@angular/core';
import { ICartDetails } from '../models/cart.interface';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

  @Input() cartDetails!:ICartDetails

  constructor() { }

  ngOnInit(): void {
  }

}
