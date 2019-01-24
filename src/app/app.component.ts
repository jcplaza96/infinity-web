import { Component, ViewChild } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FuncionesGlobalesService } from './services/funciones-globales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoDIW';

  @ViewChild('navBar') navBar: NavBarComponent;

  constructor(private globalFuctions: FuncionesGlobalesService) {
  }

  ngAfterContentInit() {
    this.globalFuctions.setNavBar(this.navBar);
  }

}
