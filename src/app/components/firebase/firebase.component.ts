import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
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

  event: Event;
  

  constructor(private fb : FirebaseService, private fbs: FirebaseStorageService) { }

  ngOnInit() {
  }
  
  addItem(section: string,tittle: string,description: string, origen: string){
    
    this.fb.addItem(section,{description: description,tittle: tittle, image: this.fbs.uploadFile(this.event,origen), origen: origen});
    //this.fbs.uploadFile(this.event,origen);
    
  }

  createItem(d: string, t: string, i: string){
  }

  update(value: string){
    document.getElementById("p").innerHTML = value;
  }
  
  getFile(event: Event){
    this.event = event;
  }

}
