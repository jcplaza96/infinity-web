import { Component, OnInit, Input} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  contenido; 
  carga 
  items: any;
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
    this.conexion.listaItem(this.parent).subscribe(item =>{
      this.items = item;     
    })

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    setTimeout(()=>{
      this.contenido.className = "container";
      this.carga.className = "d-none";    
    },1000)
  }

}
