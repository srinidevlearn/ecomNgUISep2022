import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IProductTable } from 'src/app/prod-management/prod-table/product.interface';
import { prod } from 'src/app/shared/fake-data/product.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product$ = of(prod);
  
  products:IProductTable[] = [];

  constructor() { }

  ngOnInit(): void {
    this.product$.pipe().subscribe(d=>{
      this.products = d?.data ? d.data : []; 
    })
  }

}
