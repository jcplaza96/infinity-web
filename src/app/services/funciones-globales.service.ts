import { Injectable } from '@angular/core';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class FuncionesGlobalesService {

  public navBar: NavBarComponent = null;

  constructor() { }

  public setNavBar(navBar: NavBarComponent) {
    this.navBar = navBar;
  }


}
