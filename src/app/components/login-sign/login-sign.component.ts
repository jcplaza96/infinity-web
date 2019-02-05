import { Component, OnInit } from '@angular/core';
import { FuncionesGlobalesService } from 'src/app/services/funciones-globales.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import {NgForm} from '@angular/forms';



declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-login-sign',
  templateUrl: './login-sign.component.html',
  styleUrls: ['./login-sign.component.scss']
})
export class LoginSignComponent implements OnInit {
  target: any;

  constructor(private conexion: FuncionesGlobalesService, private  authService:  AuthService, private router: Router) { }


  logout(){
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }

  register(email, password, nombre, apellido){
    this.authService.registerUser(email, password)
    .then((res)=>{
      var user = this.authService.getCurrentUser();
      user.updateProfile({
        displayName: nombre +' '+ apellido,
        photoURL: ''
      });
      this.router.navigate(['/']);
    }).catch(err=> console.log('err', err.message));
  }

  loginEmail(email, password): void{
    this.authService.loginEmailUser(email, password)
    .then((res)=>{
      this.router.navigate(['/']);
    }).catch(err=> console.log('err', err.message));
  }

  loginGoogle(): void{
    this.authService.loginGoogleUser()
      .then((res)=>{
        this.router.navigate(['/']);
      }).catch(err=> console.log('err', err.message));
  }

  ngOnInit() {
    console.log(this.authService.getCurrentUser());
    this.efectosLogin();
    this.conexion.navBar.setBackgroundDark();
  }

  ngOnDestroy() {
    this.conexion.navBar.setBackgroundlight();
  }

  efectosLogin() {
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

      var $this = $(this),
        label = $this.prev('label');

      if (e.type === 'keyup') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
      } else if (e.type === 'blur') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.removeClass('highlight');
        }
      } else if (e.type === 'focus') {

        if ($this.val() === '') {
          label.removeClass('highlight');
        }
        else if ($this.val() !== '') {
          label.addClass('highlight');
        }
      }

    });

    $('.tab a').on('click', function (e) {

      e.preventDefault();

      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      this.target = $(this).attr('href');

      $('.tab-content > div').not(this.target).hide();

      $(this.target).fadeIn(600);

    });
  }
}
