import { Component, OnInit, Input} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Item } from '../../services/firebase.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  contenido;carga;
  items: any[] = [];
  @Input() parent: string;
  id: string;
  constructor(private conexion: FirebaseService) {
    
    // for (let index = 0; index < 5; index++) {
    //   this.items.push(new ListItemComponent());
    // };
  }
  
  ngOnInit() {
    this.carga = document.getElementById("carga");
    this.contenido = document.getElementById("contenido");
    this.id = this.parent;
    // this.conexion.listaItem(this.parent).subscribe(item =>{
    //   this.items = item;     
    // })
    this.getItems();
    setTimeout(() => {
      this.carga.className = "d-none";
      this.contenido.className = "container";
    },2000)
    window.scrollTo(0,0);
  }

  getItems(){
    this.items = [];
    this.conexion.getAllSection(this.parent).subscribe(actions => {
      actions.forEach(action => {
        this.items.push({id: action.payload.doc.id, ...action.payload.doc.data()});
      });
    })
  }


}
