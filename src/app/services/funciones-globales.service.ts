import { Injectable } from '@angular/core';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class FuncionesGlobalesService {

  public navBar: NavBarComponent = null;

  constructor(private  authService:  AuthService) { }

  public setNavBar(navBar: NavBarComponent) {
    this.navBar = navBar;
  }



}
