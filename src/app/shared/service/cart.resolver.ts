import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck,filter, tap } from 'rxjs/operators';
import { CartService } from './cart.service';

import { ApiService } from './prod-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<any> {
  constructor(private api:ApiService,private cartService:CartService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let user:string = '';
    try{
      let userInfo:any = localStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      user = userInfo.userId  ?  userInfo.userId : '';

    }catch(e){

    }finally{

      return this.api.getUserCartDetails(user).pipe(pluck('data'),tap(d=>{
        this.cartService.cartCount = d.length
      }))
    }
  
  }
}
