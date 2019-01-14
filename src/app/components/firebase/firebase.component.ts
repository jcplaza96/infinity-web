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
  
  addItem(section: string,tittle: string, image: string,description: string){
    this.fb.addItem(section,{description: description,tittle: tittle, image: image});
  }

  createItem(d: string, t: string, i: string){

  }

  update(value: string){
    document.getElementById("p").innerHTML = value;
  }
  
}
