import { Component, OnInit } from '@angular/core';
import { FuncionesGlobalesService } from 'src/app/services/funciones-globales.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
//
  constructor(private globales: FuncionesGlobalesService) { }

ngOnInit() {
  this.globales.navBar.setBackgroundDark();
}

ngOnDestroy() {
  this.globales.navBar.setBackgroundlight();
}

}
