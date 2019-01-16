import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { description: string, image: string, tittle: string }


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    //this.itemsCollection = this.afs.collection<Item>('items');
  }
  





  listaItem(item: string){
    this.itemsCollection = this.afs.collection<Item>(item);
    return this.itemsCollection.valueChanges();
   }

  addItem(id: string, item: Item){
    this.itemsCollection = this.afs.collection<Item>(id);
    this.itemsCollection.add({description: item.description, image: item.image, tittle: item.tittle}) 
  }
}
