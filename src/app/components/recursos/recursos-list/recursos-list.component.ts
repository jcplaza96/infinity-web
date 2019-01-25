import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-recursos-list',
  templateUrl: './recursos-list.component.html',
  styleUrls: ['./recursos-list.component.scss']
})
export class RecursosListComponent implements OnInit {
  carga;contenido;
  
  items: any;
  id: string;
  constructor(private conexion: FirebaseService) {
    
    // for (let index = 0; index < 5; index++) {
    //   this.items.push(new ListItemComponent());
    // };
  }
  
  ngOnInit() {
    this.carga = document.getElementById("carga");
    this.contenido = document.getElementById("contenido");
    this.conexion.listaItem('recursos').subscribe(item =>{
      this.items = item;      
    })
    
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    setTimeout(()=>{
      this.contenido.className = "container";
      this.carga.className = "d-none";    
    },1200)
  }
}
