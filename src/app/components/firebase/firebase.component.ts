import { Component, OnInit } from '@angular/core';
import { FirebaseService, Item } from 'src/app/services/firebase.service';
import { fbind } from 'q';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { stringify } from '@angular/core/src/util';
import { FirebaseStorageService } from '../../services/storage/firebase-storage.service';

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

  event: Event;
  item;

  constructor(private fb : FirebaseService, private fbs: FirebaseStorageService) { }

  ngOnInit() {
  }
  
  addItem(section: string,tittle: string,description: string, origen: string){
    if(tittle != '' && description != ''){
      this.fbs.uploadFile(this.event,origen).toPromise().then(res => {
        res.ref.getDownloadURL().then(url => {
          this.fb.addItem(section,{description: description,tittle: tittle, image: url, origen: origen});
        })
      })
    }
  }
  
  getFile(event){
    this.event = event;
    document.getElementById("mensaje").innerHTML = " "+event.target.files[0].name+" ";
  }

  toggleUsuarios(){
    this.usuarios = !this.usuarios;
    this.getItem();
  }
  toggleContenido(){
    this.contenido = !this.contenido;
  }

  getItem(){
    this.fb.getItem().subscribe(res => {
      this.item = res[0];
      console.log(res);
    })
    
  }
}
