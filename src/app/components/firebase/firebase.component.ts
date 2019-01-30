import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { fbind } from 'q';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  constructor(private fb : FirebaseService) { }

  ngOnInit() {
  }
  
  addItem(section: string,tittle: string, image: string,description: string, origen: string){
    if(tittle != '' && description != ''){
      if(image == null || image == '') image = "LOGO.png";
       this.fb.addItem(section,{description: description,tittle: tittle, image: image, origen: origen});
    }
  }

  createItem(d: string, t: string, i: string){
  }

  update(value: string){
    document.getElementById("p").innerHTML = value;
  }
  
}
