import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {

  constructor(private dataservice : DataService , private router : Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.dataservice.cart.length == 0) {
        this.dataservice.isShowHeaderFooter = true ;
        this.router.navigate(['/home']);
        return false ;
    } else {
      this.dataservice.isShowHeaderFooter = false ;
      return true ;
    }
  }

}
