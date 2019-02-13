import { FirebaseStorageService } from './../../services/storage/firebase-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/services/firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  radio: HTMLFormElement[];
  @Input() i: Item;
  @Input() id: string;
  

  shortDescription: string = "";
  seeMore: boolean = false;
  constructor(private fbs: FirebaseStorageService) {
  }
  
  ngOnInit() {
    this.getShortDescription();
    //console.log(document.getElementsByName("rating"));

   }

  toogleSeeMore(){
    this.seeMore = !this.seeMore;
  }

  getShortDescription(){
    let desc = this.i.description.split(" ");
    //console.log(desc);
    for (let index = 0; index < 13 && desc[index] != null; index++) {
      this.shortDescription = this.shortDescription.concat(desc[index] + " ");
    }
    if(desc.length > 13) this.shortDescription = this.shortDescription.concat("...");
  }

  uRate(f: NgForm){
    console.log(f.controls['rating'].value);
  }
}
