import { Component, OnInit, Input, Injectable, HostListener } from '@angular/core';

@Component({
  selector: 'app-ofertas-slider',
  templateUrl: './ofertas-slider.component.html',
  styleUrls: ['./ofertas-slider.component.scss']
})

export class OfertasSliderComponent implements OnInit {

  @Input() tittle: string;
  @Input() description: string;
  @Input() image: string;
  reescalar: boolean = true;
  descripcionOriginal: string;
  
  constructor() {
    
  }

  ngOnInit() {
    this.descripcionOriginal=this.description;
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
    onResize() {
      if(window.innerWidth>=992){
        this.reescalar=true
        this.description = this.descripcionOriginal;
      }
      if(window.innerWidth<992 && this.reescalar==true){
        this.reescalar=false;
        let desc = this.description.split(" ");
        this.description="";
        for (let index = 0; index < 13 && desc[index] != null; index++) {
          this.description = this.description.concat(desc[index] + " ");
        }
        if(desc.length > 13) this.description = this.description.concat("...");
        
      }
    }
}
