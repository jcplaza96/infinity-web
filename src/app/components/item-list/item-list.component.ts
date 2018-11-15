import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: any[] = [];

  constructor() {
    for (let index = 0; index < 10; index++) {
      this.items.push(new ListItemComponent());
    }
   }

  ngOnInit() {
  }

}
