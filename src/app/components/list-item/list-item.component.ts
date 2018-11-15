import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  imagen: String = 'http://www.decentfashion.in/wp-content/uploads/2018/09/feelirung-sad-images-8-300x270.gif';
  title: String = 'Título';
  description: String = 'Lorem ipsum dolor sit amet consecteturs';

  constructor() { }

  ngOnInit() {
  }

}
