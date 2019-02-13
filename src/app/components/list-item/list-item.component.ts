import { FirebaseStorageService } from './../../services/storage/firebase-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() i: Item;
  @Input() id: string;
  
  shortDescription: string = "";
  seeMore: boolean = false;
  constructor(private fbs: FirebaseStorageService) {
  }
  
  ngOnInit() {
    let desc = this.i.description.split(" ");
    //console.log(desc);
    for (let index = 0; index < 13 && desc[index] != null; index++) {
      this.shortDescription = this.shortDescription.concat(desc[index] + " ");
    }
    if(desc.length > 13) this.shortDescription = this.shortDescription.concat("...");
  }

  toogleSeeMore(){
    this.seeMore = !this.seeMore;
  }
}
