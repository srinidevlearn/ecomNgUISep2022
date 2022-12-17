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

  /**
   * Bind class level variable values to the html template
   * 1) One way data binding {{}}
   * 2) Two Way data binding [()]
   * 3) attribute level data binding []
   */

  /**
   * Memory leak avoid manadtory on subscribe
   * by putting unsubscribe
   */

  product$ =  of(prod.data);
  products:IProductTable[] = [];
  productSub:Subscription | undefined;

  constructor() { }

  ngOnInit(): void {
    this.productSub = this.product$.subscribe(productData=>{
      this.products = productData
    })

  }

  ngOnDestroy(){
    if(this.productSub) this.productSub.unsubscribe()
  }

}
