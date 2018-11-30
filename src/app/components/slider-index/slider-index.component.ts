import { Component, OnInit } from '@angular/core';
import { OfertasSliderComponent } from '../ofertas-slider/ofertas-slider.component';

@Component({
  selector: 'app-slider-index',
  templateUrl: './slider-index.component.html',
  styleUrls: ['./slider-index.component.scss']
})
export class SliderIndexComponent implements OnInit {
  ofertas:OfertasSliderComponent[]=[];

  constructor() { 
    for (let index = 0; index < 2; index++) {
      this.ofertas[index]=(new OfertasSliderComponent());
      this.ofertas[index].ofertasUrl="/assets/img/slider-"+(index+1)+".jpg";
    }
  }

  ngOnInit() {
  }

}
