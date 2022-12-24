import { Component, Input, OnInit } from '@angular/core';
import { IProductTable } from 'src/app/prod-management/prod-table/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productData!:IProductTable;

  constructor() { }

  ngOnInit(): void {
  }

}
