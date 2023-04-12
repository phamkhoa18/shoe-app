import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DeloycheckoutGuard implements CanActivate {

  constructor (private dataservice : DataService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.dataservice.isShowHeaderFooter) {
      this.dataservice.isShowHeaderFooter = true ;
      return true ;
    } else {
      this.dataservice.isShowHeaderFooter = true ;
      return true ;
    }
  }

}
