import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: any[] = [];

  constructor() {
    for (let index = 0; index < 5; index++) {
      this.items.push(new ListItemComponent());
    }
   }

  ngOnInit() {
  }

}
