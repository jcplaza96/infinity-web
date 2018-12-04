import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

<<<<<<< HEAD
  scrolled:boolean = false;
  showMenu:boolean = false;


=======
  scrolled = false;
>>>>>>> ce6b63960d1ab4d2077a7279e94140cbdb85f86f
  constructor() { }

  ngOnInit() {

  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
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
