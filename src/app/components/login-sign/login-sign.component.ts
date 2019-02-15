import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class LoginSignComponent implements OnInit, AfterViewInit {
  target: any;
  code: string;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
      this.Captcha();
  }

  onSubmit(f: NgForm){
    alert("hola");
  }
  constructor(private afs: AngularFirestore, private conexion: FuncionesGlobalesService, private  authService:  AuthService, private router: Router) { }

  logout(){
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }

  register(email, password, name, apellido1, apellido2, fecha, cp, pais, telefono, captcha: string){
    if(this.comprobarCaptcha(captcha.toLowerCase()) && this.comprobarPassword(password)){
      this.authService.registerUser(email, password)
      .then((res)=>{
        var user = this.authService.getCurrentUser();
        user.updateProfile({
          displayName: name,
          photoURL: '',
        });
        this.updateUserData(user, name, apellido1, apellido2, fecha, cp, pais, telefono);
        this.router.navigate(['/']);
      }).catch(err=> alert(err.message));
    }
    
  }

  loginEmail(email, password): void{
    this.authService.loginEmailUser(email, password)
    .then((res)=>{
      this.router.navigate(['/']);
    }).catch(err=> alert(err.message));
  }

  comprobarCaptcha(captcha){
    if(captcha==this.code.toLowerCase()){
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
    regex.push("[!@#$%^&*.]"); //Special Character.

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
        alert("Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these [!@#$%^&*]");
        return false;
    }
  }

  loginGoogle(): void{
    this.authService.loginGoogleUser()
      .then((res)=>{
        this.router.navigate(['/']);
      }).catch(err=> alert(err.message));
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
      admin: false,
      editor: false,
      reader: true,
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


  Captcha() {
    var alpha1 = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '# ', ',', '.', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '"', ':', ';', '/', '?', '<', '>', '|');
    var alpha3 = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha1[Math.floor(Math.random() * alpha1.length)];
        var b = alpha1[Math.floor(Math.random() * alpha1.length)];
        var c = alpha3[Math.floor(Math.random() * alpha3.length)];
        var d = alpha1[Math.floor(Math.random() * alpha1.length)];
        var e = alpha1[Math.floor(Math.random() * alpha1.length)];
        var f = alpha3[Math.floor(Math.random() * alpha3.length)];
        var g = alpha1[Math.floor(Math.random() * alpha1.length)];
    }
    this.code = a + b + c + d + e + f + g;
    this.CreaIMG(this.code);
}

removeSpaces(string) {
    return string.split(' ').join('');
}

CreaIMG(texto) {
  //@ts-ignore
    var ctxCanvas = document.getElementById('captchaCanvas').getContext('2d');
    var fontSize = "30px";
    var fontFamily = "Arial";
    var width = 250;
    var height = 50;
    //tamaño
    ctxCanvas.canvas.width = width;
    ctxCanvas.canvas.height = height;
    //color de fondo
    ctxCanvas.fillStyle = "whitesmoke";
    ctxCanvas.fillRect(0, 0, width, height);
    //puntos de distorsion
    ctxCanvas.setLineDash([7, 10]);
    ctxCanvas.lineDashOffset = 5;
    ctxCanvas.beginPath();
    var line;
    for (var i = 0; i < (width); i++) {
        line = i * 5;
        ctxCanvas.moveTo(line, 0);
        ctxCanvas.lineTo(0, line);
    }
    ctxCanvas.stroke();
    //formato texto
    ctxCanvas.direction = 'ltr';
    ctxCanvas.font = fontSize + " " + fontFamily;
    //texto posicion
    var x = (width / 9);
    var y = (height / 3) * 2;
    //color del borde del texto
    ctxCanvas.strokeStyle = "yellow";
    ctxCanvas.strokeText(texto, x, y);
    //color del texto
    ctxCanvas.fillStyle = "red";
    ctxCanvas.fillText(texto, x, y);
    console.log(this.code);
}
}
