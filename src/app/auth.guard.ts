import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyApi } from './services/user.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/

  constructor(private _api:MyApi,
              private router: Router){
  }
  canActivate():boolean{
    if(this._api.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/admin']);
      return false;
    }
  }
  
}
