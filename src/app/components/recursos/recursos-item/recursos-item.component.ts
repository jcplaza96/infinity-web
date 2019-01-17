import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recursos-item',
  templateUrl: './recursos-item.component.html',
  styleUrls: ['./recursos-item.component.scss']
})
export class RecursosItemComponent implements OnInit {


  @Input() imagen: string;
  @Input() tittle: string;
  @Input() description: string;
  @Input() origen: string;
  shortDescription: string = "";
  seeMore: boolean = false;
  constructor() {
  }
  
  ngOnInit() {
    let desc = this.description.split(" ");
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
