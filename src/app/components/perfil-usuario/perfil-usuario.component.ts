import { Component, OnInit } from '@angular/core';
import { FuncionesGlobalesService } from 'src/app/services/funciones-globales.service';
import { UserInterface } from '../../models/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

declare let $:any;



@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  data: UserInterface = {
    id: '',
    name: '',
    surname1: '',
    surname2: '',
    birthday: '',
    cp: '',
    country: '',
    phoneNumber: '',
    email: '',
  
    roles: {
      admin: false,
      editor: false,
      reader: true
    }
  }

  constructor(private globales: FuncionesGlobalesService, private afs: AngularFirestore, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.globales.navBar.setBackgroundDark();
    this.findUser();
  }

  ngOnDestroy() {
    this.globales.navBar.setBackgroundlight();
  }

  updateUser() {
    //if (!f.valid) return;
    try{
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.auth.auth.currentUser.uid}`);
      userRef.set(this.data, {merge:true});
      alert("Usuario actualizado correctamente");
    }catch(error){
      alert("Error al actualizar el usuario: " + error);
    }
    
  }

  findUser() {
    let aux;
    try {
      let ref = this.afs.collection("users", ref => ref.where("id", "==", this.auth.auth.currentUser.uid));
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

}
