import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-ofertas-slider',
  templateUrl: './ofertas-slider.component.html',
  styleUrls: ['./ofertas-slider.component.scss']
})

export class OfertasSliderComponent implements OnInit {

  title: String = '';
  description: String = '';
  ofertasUrl: String ='';

  constructor() {
    this.title = 'Título';
    this.description = 'Description about slider';
    this.ofertasUrl = "/assets/img/slider-1.jpg";
  }

  ngOnInit() {
    
  }

}
