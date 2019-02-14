import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap, delay } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import { userInfo } from 'os';
import { UserInfo } from 'firebase';
import { UserInterface } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  isAdmin: any = null;

  constructor(private afsAuth: AngularFireAuth, private router: Router, private  authService:  AuthService){}
  
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean> | Promise<boolean> | boolean> {
      return this.afsAuth.authState
      .pipe(take(1))
      .pipe(map(authState=> !!authState))
      .pipe(map(auth=>this.mapReturn(auth)))
      .toPromise();
  }

  mapReturn(auth) {
    if(auth){
      return this.authService.isUserAdmin(this.afsAuth.auth.currentUser.uid)
      .pipe(take(1)).pipe(map(result=>result.admin))
      .pipe(map(bools=>this.redirectIfFalse(bools))).toPromise();
    }
    return false;
  }

  redirectIfFalse(bools) {
    if (!bools) this.router.navigateByUrl('/');
    return bools;
  }


}
