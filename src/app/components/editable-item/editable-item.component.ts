import { Item } from '../../classes/Item';
import { NgForm, FormsModule, NgModel } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-item',
  templateUrl: './editable-item.component.html',
  styleUrls: ['./editable-item.component.scss']
})
export class EditableItemComponent implements OnInit {

  @Output() init: EventEmitter<any> = new EventEmitter();
  @Input() i;
  @Input() isNew: boolean;
  
  
  
  constructor(private fb: FirebaseService) { }

  ngOnInit() { 
    
  }


  update(){
    this.fb.update(this.i.id,this.i.section,{tittle: this.i.tittle,description: this.i.description});
    this.i = false;
    setTimeout(() => {
      this.init.emit("init");
    },10);
   
  }

  delete(){
    this.fb.delete(this.i.id,this.i.section);
    this.i = false;
    setTimeout(() => {
      this.init.emit("init");
    },10);
  }

}
