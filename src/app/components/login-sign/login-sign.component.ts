import { Component, OnInit } from '@angular/core';
import { FuncionesGlobalesService } from 'src/app/services/funciones-globales.service';


declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-login-sign',
  templateUrl: './login-sign.component.html',
  styleUrls: ['./login-sign.component.scss']
})
export class LoginSignComponent implements OnInit {
  target:any;

  constructor(private conexion: FuncionesGlobalesService) { }

  ngOnInit() {
    this.conexion.removeOpacity();
  }

  ngOnDestroy() {
    this.conexion.addOpacity();
  }
}
