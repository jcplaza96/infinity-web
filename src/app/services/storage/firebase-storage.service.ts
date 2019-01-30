import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  urlFile ="";

  constructor(private fbs: AngularFireStorage) { }


  uploadFile(event,dir: string){
    const file: File = event.target.files[0];
    let ref = this.fbs.ref(dir+"/"+file.name);
    const task = ref.put(file);
    return task.snapshotChanges();
  }

  getFile(filename: string, dirname: string){
    return this.fbs.ref(dirname+'/'+filename);    
  }

}
