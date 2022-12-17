import { Component, OnInit } from '@angular/core';
import { delay, from, of, Subscription } from 'rxjs';
import { IProductTable } from './product.interface';
import { prod } from './product.mock';

@Component({
  selector: 'app-prod-table',
  templateUrl: './prod-table.component.html',
  styleUrls: ['./prod-table.component.scss']
})
export class ProdTableComponent implements OnInit {


  product$ =  of(prod.data);

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

}
