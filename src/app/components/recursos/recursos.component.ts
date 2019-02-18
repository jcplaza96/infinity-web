import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { timeout } from 'q';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {

  parents :string[] = ["cursos","ninstalaciones","ofertas"];
  rows: any[] = [""];
  metaItems: any;


  id: string = "";
  constructor(private conexion: FirebaseService) { }

  ngOnInit() {
    // this.parents.forEach(element => {
    //   //console.log(element);
    //   this.conexion.listaItem(element).subscribe(item => {
    //     this.rows[element] = item;
    //   });
    //   console.log(this.parents);
    // });
  }
  
  consola(){
    console.log((this.rows));
  }
}