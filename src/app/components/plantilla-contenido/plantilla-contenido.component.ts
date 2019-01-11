import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla-contenido',
  templateUrl: './plantilla-contenido.component.html',
  styleUrls: ['./plantilla-contenido.component.scss']
})
export class PlantillaContenidoComponent implements OnInit {
  
  id: string = "items";

  constructor() { }

  ngOnInit() {
  }

}
