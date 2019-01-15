import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-ofertas-slider',
  templateUrl: './ofertas-slider.component.html',
  styleUrls: ['./ofertas-slider.component.scss']
})

export class OfertasSliderComponent implements OnInit {

  @Input() tittle: string;
  @Input() description: string;
  @Input() image: string;
  
  constructor() {
    
  }

  ngOnInit() {
    
  }

}
