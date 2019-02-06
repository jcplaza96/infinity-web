import { Component, OnInit } from '@angular/core';
import { FirebaseService, Item } from 'src/app/services/firebase.service';
import { fbind } from 'q';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { stringify } from '@angular/core/src/util';
import { FirebaseStorageService } from '../../services/storage/firebase-storage.service';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";


export interface Item { description: string, image: string, tittle: string, origen?: string; }


import { AngularFireAuth } from "@angular/fire/auth";
import { UserInterface } from '../../models/user'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  /**
   * Flags declaration
   */

   contenido: boolean;
   usuarios: boolean;
   isAdmin: any = null;

  event: Event;
  item;

  constructor(public router: Router, private fb : FirebaseService, private fbs: FirebaseStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
  }
  
  addItem(section: string,tittle: string,description: string, origen: string){
    console.log("traza1");
    //if(tittle != '' && description != ''){
      console.log("Traza2");
      this.fbs.uploadFile(this.event,origen).toPromise().then(res => {
        res.ref.getDownloadURL().then(url => {
          this.fb.addItem(section,{description: description,tittle: tittle, image: url, origen: origen});
          this.fb.addItem("recursos",{description: description,tittle: tittle, image: url, origen: "Recursos"});
        })
      })
    //}
  }
  
  getFile(event){
    this.event = event;
    document.getElementById("mensaje").innerHTML = " "+event.target.files[0].name+" ";
  }

  toggleUsuarios(){
    this.usuarios = !this.usuarios;
  }
  toggleContenido(){
    this.contenido = !this.contenido;
  }

  // getItem(){
  //   this.item = this.fb.getItem().pipe(map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as Item;
  //       const id = a.payload.doc.id;
  //       console.log("object");
  //       return {id,...data};
  //     }))
  //   );

  getItem(section: string,title: string){ 
    this.item = false;
    let aux = this.fb.getItem(section,title);
    if(aux != false){
      aux.subscribe(actions => {
        this.item = {id: actions[0].payload.doc.id, ...actions[0].payload.doc.data()}
      });
    }
  }

  update(id,path,title,description){
      console.log(description);
    this.fb.update(id,path,{tittle: title,description: description});
  }

  delete(id,path){
    this.fb.delete(id,path);
    this.item = false;
  }


  getCurrentUser(){
    this.authService.isLoggedIn().subscribe(auth=>{
      if(auth){
        this.authService.isUserAdmin(auth.uid).subscribe(userRole=>{
          this.isAdmin = Object.assign({},userRole.roles).admin;
        })
      }
    })
  }

  prueba(section: string,tittle: string,description: string, origen: string){
    console.log(section);
    console.log(tittle);
    console.log(description);
  }
}
