import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  urlFile ="";

  constructor(private fbs: AngularFireStorage) { }


  uploadFile(event){
    const file: File = event.target.files[0];
    let ref = this.fbs.ref("prueba/"+file.name);
    const task = ref.put(file);
  }

  getFile(filename: string, dirname: string){
    return this.fbs.ref(dirname+'/'+filename);    
  }

}
