import { Component, OnInit } from '@angular/core';
import { OfertasSliderComponent } from '../ofertas-slider/ofertas-slider.component';

@Component({
  selector: 'app-slider-index',
  templateUrl: './slider-index.component.html',
  styleUrls: ['./slider-index.component.css']
})
export class SliderIndexComponent implements OnInit {
  ofertas:any[]=[];

  constructor() { 
    for (let index = 0; index < 2; index++) {
      this.ofertas.push(new OfertasSliderComponent());
    }
  }

  ngOnInit() {
  }

}
