import { Component, OnInit } from '@angular/core';
import { of, startWith, Subject, takeUntil } from 'rxjs';
import {
  IProductTable,
  IShoppingInfo,
} from 'src/app/prod-management/prod-table/product.interface';
import { prod } from 'src/app/shared/fake-data/product.mock';
import { ApiService } from 'src/app/shared/service/prod-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  

  destroy$ = new Subject<void>();
  // products: IShoppingInfo[] = [];

  productTrack:{[key:string]:IShoppingInfo} = {};

  get products(){
    return Object.values(this.productTrack);
  }

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.api.getAllProducts().pipe(takeUntil(this.destroy$)).subscribe((d) => {
      d?.data?.map((item: IProductTable, index: number) => {
        let temp: IShoppingInfo = { ...item,qty:0 };
        this.productTrack[temp.id] = temp; // { 'is':{}}
      });
    });
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackChanges(e:IShoppingInfo){

    let {id} = e;
    if(id){
      this.productTrack[id] = e;
    }
    
  }
}
