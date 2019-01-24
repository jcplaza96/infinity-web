import { FirebaseStorageService } from './../../services/storage/firebase-storage.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() imagen: string;
  @Input() tittle: string;
  @Input() description: string;
  @Input() id: string;
  imageURL: string;
  shortDescription: string = "";
  seeMore: boolean = false;
  constructor(private fbs: FirebaseStorageService) {
  }
  
  ngOnInit() {
    let desc = this.description.split(" ");
    //console.log(desc);
    for (let index = 0; index < 13 && desc[index] != null; index++) {
      this.shortDescription = this.shortDescription.concat(desc[index] + " ");
    }
    if(desc.length > 13) this.shortDescription = this.shortDescription.concat("...");

    this.fbs.getFile(this.imagen,this.id).getDownloadURL().subscribe(url => {this.imageURL = url})
  }

  toogleSeeMore(){
    this.seeMore = !this.seeMore;
  }
}
