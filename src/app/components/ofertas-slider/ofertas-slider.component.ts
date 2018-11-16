import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ofertas-slider',
  templateUrl: './ofertas-slider.component.html',
  styleUrls: ['./ofertas-slider.component.css']
})
export class OfertasSliderComponent implements OnInit {

  url: String = '';
  title: String = '';
  description: String = '';


  constructor() {
    this.url = '/assets/img/slider-1.jpg';
    this.title = 'Título';
    this.description = 'Description about slider';
  }

  ngOnInit() {
  }

}
