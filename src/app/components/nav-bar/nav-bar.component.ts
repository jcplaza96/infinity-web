import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

declare let $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userName: string = "";
  logged:boolean = false;
  scrolled:boolean = false;
  showMenu:boolean = false;
  showDropDown:boolean = false;
  black: boolean = false;
  notificacion: boolean = false;


  constructor(private  authService:  AuthService) { }


  public setBackgroundDark() {
    this.black = true;
  }

  public setBackgroundlight() {
    this.black = false;
  }

  ngOnInit() {
    if(!this.getCookie("notificacion")) {
      this.notificacion = true;
    }
    this.isLogged();
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

  isLogged(){
    this.authService.isLoggedIn().subscribe(auth =>{
      if(auth){
        this.userName =auth.displayName;
        this.logged = true;
      }else{
        this.logged = false;
      }
    });
  }

  logout(){
    this.authService.logoutUser();
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

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

   getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  quitarnotificacion() {
    this.setCookie("notificacion", true, 30);
    this.notificacion = false;
  }

}
