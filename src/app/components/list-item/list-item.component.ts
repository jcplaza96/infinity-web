import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() imagen: string;
  title: String = '';
  description: String = '';

  constructor() {
    this.imagen = 'https://www.eoi.es/blogs/madeon/files/2013/05/Capacitacion.png';
    this.title = 'Título';
    this.description = 'Lorem ipsum dolor sit amet consecteturs';
  }

  ngOnInit() {
  }

}
