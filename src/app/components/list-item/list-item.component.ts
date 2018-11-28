import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  imagen: String = '';
  title: String = '';
  description: String = '';

  constructor() {
    this.imagen = 'https://e.radio-studio92.io/normal/2018/05/15/080108_610158.jpg';
    this.title = 'Título';
    this.description = 'Lorem ipsum dolor sit amet consecteturs';
   }

  ngOnInit() {
  }

}
