import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from './shared/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ecomsitelogo =
    'https://ouch-cdn2.icons8.com/v9tQerukt_ZRIn_4wqPGcLmlPCQway9C3MUD1AKfn10/rs:fit:485:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNi9k/MDU5NDhhMS1hNjUw/LTRjZDMtYTVmNC02/MmNiNTgzZWRjYzUu/c3Zn.png';
  title = 'ecomUiSep2022';
  cartCount =0;
  destroy$ = new Subject<void>();

  isAuthModule: boolean = false;

  constructor(public router: Router,public cart:CartService) {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      if (d instanceof NavigationEnd) {
        if (d.url.includes('auth')) this.isAuthModule = true;
        else this.isAuthModule = false;
      }
    });

    this.cart.cartCount$.pipe(takeUntil(this.destroy$)).subscribe(d=>{
      this.cartCount = d;
    })
  }
  logout() {
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('auth');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public get isInventoryManager(): boolean {
    try {
      let userInfo: any = localStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (
        userInfo?.user?.role &&
        userInfo.user.role.includes('inventoryManager')
      ) {
        return true;
      } else {
        return false;
      }
    } catch (e) {}
    return false;
  }
}
