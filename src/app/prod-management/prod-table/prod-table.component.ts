import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, from, Observable, of, Subscription } from 'rxjs';
import { IProductTable } from './product.interface';
import { prod } from './product.mock';

@Component({
  selector: 'app-prod-table',
  templateUrl: './prod-table.component.html',
  styleUrls: ['./prod-table.component.scss']
})
export class ProdTableComponent implements OnInit {

  searchTerm:string = "";

  product$:Observable<IProductTable[]>=  of(prod.data);

  constructor(public router:Router) { }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

  navigateTo(productId:string){
    console.log(productId)
    this.router.navigate(["management","prd", productId])
  }

}
