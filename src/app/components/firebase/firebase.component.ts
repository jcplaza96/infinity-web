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
import { NgForm } from '@angular/forms';
import { FuncionesGlobalesService } from 'src/app/services/funciones-globales.service';

import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  /**
   * Flags declaration
   */

  data: UserInterface = {
    id: '',
    name: '',
    surname1: '',
    surname2: '',
    birthday: '',
    cp: '',
    country: '',
    phoneNumber: '',

    roles: {
      admin: false,
      editor: false,
      reader: true
    }
  }

   action: string = "list";
   contenido: boolean;
   usuarios: boolean;
   isAdmin: any = null;


  event: Event;
  SECTIONS: string[] = ['ninstalaciones','noticias','cursos'];
  editableItem;
  newItem: boolean = false;
  items: any[] = [];
  constructor(private fg: FuncionesGlobalesService, private afs: AngularFirestore, public router: Router, private fb : FirebaseService, private fbs: FirebaseStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.fg.navBar.setBackgroundDark();
    setTimeout(()=>{}, 20000);
    this.init();
    
    
  //  console.log(this.authService.afAuth.auth.currentUser.metadata);
  }
  
  init(){
    this.items = [];
    this.SECTIONS.forEach(section => {
      this.fb.getAllSection(section).subscribe(actions => {
        actions.forEach(action => {
          let id = action.payload.doc.id;
          this.items.push({id,origen: section ,...action.payload.doc.data()});
        })
      })
    });
  }

  addItem(section: string,tittle: string,description: string, origen: string){
   
      
      this.fbs.uploadFile(this.event,origen).toPromise().then(res => {
        res.ref.getDownloadURL().then(url => {
          this.fb.addItem(section,{description: description,tittle: tittle, image: url, origen: origen});
          this.fb.addItem("recursos",{description: description,tittle: tittle, image: url, origen: "Recursos"});
          this.newItem = false;
        })
      })
    
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

  getItem(id,section: string){ 
    this.editableItem = false;
    this.newItem = false;
    console.log(id);
    this.fb.getItemById(section,id).subscribe(action => {
      this.editableItem = {id: action.payload.id, section: section, ...action.payload.data()};
    })
  }

  update(id,path,title,description){
  //    console.log(description);
    this.fb.update(id,path,{tittle: title,description: description});
  }

  delete(id,path){
    this.fb.delete(id,path);
    this.editableItem = false;
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

  createNewItem(){
    this.newItem = true;
    this.editableItem = null;
    
  }

  updateUser(uid) {
    //if (!f.valid) return;
    try{
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
      userRef.set(this.data, {merge:true});
      alert("Usuario actualizado correctamente");
    }catch(error){
      alert("Error al actualizar el usuario: " + error);
    }
    
  }

  findUser(email) {
    let aux;
    try {
      let ref = this.afs.collection("users", ref => ref.where("email", "==", email));
      aux = ref.snapshotChanges();
    } catch (error) {
      aux = false;
    }

    if (aux != false) {
      aux.subscribe(actions => {
        try {
          this.data ={...actions[0].payload.doc.data() };
        } catch (error) {
          alert("Ese email no corresponde a ningún usuario registrado en la página")
        }
      });
    }
  }

  ngOnDestroy() {
    this.fg.navBar.setBackgroundlight();
  }
}
