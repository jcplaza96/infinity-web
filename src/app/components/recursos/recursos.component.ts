import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {

  parents :string[] = ["cursos","ninstalaciones"];
  items: any[];
  metaItems: any;


  id: string = "recursos";
  constructor(private conexion: FirebaseService) { }

  ngOnInit() {
    this.parents.forEach(element => {
      console.log(element);
      this.conexion.listaItem(element).subscribe(item => {
        this.items[element] = item;
        console.log(this.parents);
        console.log(this.items);
      });
    });
  }

}