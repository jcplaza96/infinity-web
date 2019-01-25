import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-recursos-list',
  templateUrl: './recursos-list.component.html',
  styleUrls: ['./recursos-list.component.scss']
})
export class RecursosListComponent implements OnInit {  
  items: any;
  id: string;
  constructor(private conexion: FirebaseService) {
    
    // for (let index = 0; index < 5; index++) {
    //   this.items.push(new ListItemComponent());
    // };
  }
  
  ngOnInit() {
    this.conexion.listaItem('recursos').subscribe(item =>{
      this.items = item;      
    })

  }
}
