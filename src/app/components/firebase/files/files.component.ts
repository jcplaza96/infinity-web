import { Component, OnInit } from '@angular/core';
import { FirebaseStorageService } from '../../../services/storage/firebase-storage.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  event: Event;

  constructor(private fbs: FirebaseStorageService) { }

  ngOnInit() {
    
  }

  getFile(event){
    this.event = event;
    document.getElementById('mensaje').innerHTML = event.target.files[0].name;
  }

  uploadFile(dir: string){
    this.fbs.uploadFile(this.event,dir);
  }
}
