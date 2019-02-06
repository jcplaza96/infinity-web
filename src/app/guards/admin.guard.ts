import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isAdmin: any = null;

  constructor(private afsAuth: AngularFireAuth, private router: Router, private  authService:  AuthService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afsAuth.authState
    .pipe(take(1))
    .pipe(map(authState=> !!authState))
    .pipe(tap(auth=>{
      if(auth){
        this.authService.isUserAdmin(this.afsAuth.auth.currentUser.uid).subscribe(userRole=>{
          if(!userRole.roles.admin){
            this.router.navigate(['/']);
          }
        })  
      }
    }));
  }
}
