import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  scrolled:boolean = false;
  showMenu:boolean = false;
  showDropDown:boolean = false;


  constructor() { }

  ngOnInit() {

  }

      /* Open when someone clicks on the span element */
      openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
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
