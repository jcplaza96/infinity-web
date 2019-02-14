import { Component, OnInit } from '@angular/core';
import { FuncionesGlobalesService } from 'src/app/services/funciones-globales.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../../models/user';



declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-login-sign',
  templateUrl: './login-sign.component.html',
  styleUrls: ['./login-sign.component.scss']
})
export class LoginSignComponent implements OnInit {
  target: any;
  
  onSubmit(f: NgForm){
    alert("hola");
  }
  constructor(private afs: AngularFirestore, private conexion: FuncionesGlobalesService, private  authService:  AuthService, private router: Router) { }

  logout(){
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }

  register(email, password, name, apellido1, apellido2, fecha, cp, pais, telefono, captcha){
    if(this.comprobarCaptcha(captcha) && this.comprobarPassword(password)){
      this.authService.registerUser(email, password)
      .then((res)=>{
        var user = this.authService.getCurrentUser();
        user.updateProfile({
          displayName: name,
          photoURL: '',
        });
        this.updateUserData(user, name, apellido1, apellido2, fecha, cp, pais, telefono);
        this.router.navigate(['/']);
      }).catch(err=> console.log('err', err.message));
    }
    
  }

  loginEmail(email, password): void{
    this.authService.loginEmailUser(email, password)
    .then((res)=>{
      this.router.navigate(['/']);
    }).catch(err=> console.log('err', err.message));
  }

  comprobarCaptcha(captcha){
    if(captcha=="V4XBG"){
      return true;
    }else{
      alert("Captcha incorrecto");
      return false;
    }
    
  }

  comprobarPassword(password){
    var passwordstrength = password;
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[!@#$%^&*]"); //Special Character.

    var passed = 0;
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(passwordstrength)) {
            passed++;
        }
    }

    if (passed > 3) {
        return true;
    }
    else {
        alert("Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,>");
        return false;
    }
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

  private updateUserData(user, name, apellido1, apellido2, fecha, cp, pais, telefono){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      name: name,
      surname1: apellido1,
      surname2: apellido2,
      birthday: fecha,
      cp: cp,
      country: pais,
      phoneNumber: telefono,

      roles:{
        admin: false,
        editor: false,
        reader: true
      }
    }
    return userRef.set(data, {merge:true})
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
