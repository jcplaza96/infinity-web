import { Item } from '../../classes/Item';
import { NgForm, FormsModule, NgModel } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-editable-item',
  templateUrl: './editable-item.component.html',
  styleUrls: ['./editable-item.component.scss']
})
export class EditableItemComponent implements OnInit {

  @Input() i;
  @Input() origen;
  
  
  constructor(private fb: FirebaseService) { }

  ngOnInit() { 
    this.i.origen = this.origen;
  }


  update(){
    this.fb.update(this.i.id,this.i.origen,{tittle: this.i.tittle,description: this.i.description});
    this.i = false;
  }

  delete(){
    this.fb.delete(this.i.id,this.i.origen);
    this.i = false;
  }

}
