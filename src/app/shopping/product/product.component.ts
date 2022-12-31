import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { of, startWith, Subject, take, takeUntil } from 'rxjs';
import {
  IProductTable,
  IShoppingInfo,
} from 'src/app/prod-management/prod-table/product.interface';
import { prod } from 'src/app/shared/fake-data/product.mock';
import { CartService } from 'src/app/shared/service/cart.service';
import { ApiService } from 'src/app/shared/service/prod-api.service';

interface cartInfo {
  userId: String;
  productId: String;
  quantity: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  destroy$ = new Subject<void>();
  cartItems:any[] = [];
  // products: IShoppingInfo[] = [];

  productTrack: { [key: string]: IShoppingInfo } = {};

  get products() {
    return Object.values(this.productTrack);
  }



  constructor(
    private api: ApiService,
    private actRoute: ActivatedRoute,
    private toast: HotToastService,
    private cartService:CartService
  ) {

    this.cartItems =  this.actRoute.snapshot?.data?.['cartItems']
  }

  ngOnInit(): void {
    this.api
      .getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        d?.data?.map((item: IProductTable, index: number) => {
          let temp: IShoppingInfo = { ...item, qty: 0 };
          this.productTrack[temp.id] = temp; // { 'is':{}}
        });

        for (let item of this.cartItems) {
          let pId = item?.product?.id as string;
          let pTrackId = this.productTrack[pId]['id'] as string;
          if (pId === pTrackId) {
            this.productTrack[pId]['qty'] = item.quantity;
            this.productTrack[pId]['cartId'] = item.id ? item.id : '';
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackChanges(e: IShoppingInfo) {
    let { id } = e;
    if (id) {
      this.productTrack[id] = e;
      let cartId = this.productTrack[id]['cartId'];
      let cartInfo:cartInfo = {
        userId: this.fetchUserInfo(),
        productId: this.productTrack[id]['id'],
        quantity: this.productTrack[id]['qty'],
      };
      if(cartInfo.quantity === 0){
       this.deleteCartInfo(cartId);
      }else{
        this.updateCartInfo(cartInfo);

      }

   
    
    }
  }

  fetchUserInfo(): string {
    let user: any = localStorage.getItem('userInfo');
    user = JSON.parse(user);

    return user?.userId;
  }

  updateCartInfo(cartInfo: cartInfo) {
    this.api
      .updateCartInfo(cartInfo)
      .pipe(take(1))
      .subscribe((d) => {

        this.toast.success("Updated Cart Info successfully");
        this.updateCartCount();
      });
  }

  deleteCartInfo(cartId: any) {
    this.api
      .deleteCartInfo(cartId)
      .pipe(take(1))
      .subscribe((d) => {

        this.toast.success("Deleted from Cart Successfully");
        this.updateCartCount()
      });
  }

  updateCartCount(){
    this.api.getUserCartDetails(this.fetchUserInfo()).pipe(take(1)).subscribe((d:any)=>{
      this.cartService.cartCount = d.data?.length;
      this.cartItems = d?.data
    })
  }
}
