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
  @Input() isNew: boolean;
  
  
  
  constructor(private fb: FirebaseService) { }

  ngOnInit() { 
    
  }


  update(){
    this.fb.update(this.i.id,this.i.section,{tittle: this.i.tittle,description: this.i.description});
    this.i = false;
  }

  delete(){
    this.fb.delete(this.i.id,this.i.section);
    this.i = false;
  }

}
