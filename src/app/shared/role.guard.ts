import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanLoad {
  constructor(private toast: HotToastService) {}
  // canactivate is a method
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isInventoryManager();
  }
  //canLoad is a method
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isInventoryManager();
  }

  private isInventoryManager(): boolean {
    let user: any = localStorage.getItem('userInfo');

    try {
      if (user) {
        user = JSON.parse(user);

        if (user?.user?.role && user.user.role.includes('inventoryManager')) {
          return true;
        } else {
          this.toast.error('You are not authorised to view');
        }
      } else {
        throw new Error('User is invalid');
      }
    } catch (e) {
      return false;
    }

    return false;
  }
}
