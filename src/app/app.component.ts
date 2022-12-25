import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ecomsitelogo =
  'https://ouch-cdn2.icons8.com/v9tQerukt_ZRIn_4wqPGcLmlPCQway9C3MUD1AKfn10/rs:fit:485:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNi9k/MDU5NDhhMS1hNjUw/LTRjZDMtYTVmNC02/MmNiNTgzZWRjYzUu/c3Zn.png';
  title = 'ecomUiSep2022';
  cartCount = 0;
  destroy$ = new Subject<void>();

  isAuthModule:boolean = false;

  constructor(public router:Router){
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(d=>{
      if(d instanceof NavigationEnd){
        if(d.url.includes('auth')) this.isAuthModule = true;
        else this.isAuthModule = false;
      }
    })
  }
  logout(){}

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();

  }
}
