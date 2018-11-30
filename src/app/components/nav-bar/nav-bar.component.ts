import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  scrolled = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset;
    if (number > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }

  }

}
