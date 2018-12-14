import { Component, OnInit} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: any;

  constructor(private conexion: FirebaseService) {
    // for (let index = 0; index < 5; index++) {
    //   this.items.push(new ListItemComponent());
    // }
    this.conexion.listaItem().subscribe(item =>{
      this.items = item;
      console.log(this.items);
    })
   }

  ngOnInit() {
    this.conexion.listaItem().subscribe(item =>{
      this.items = item;
      console.log(this.items);
    })
    console.log(this.items);
  }

}
