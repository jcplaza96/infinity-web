import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {id?:string; description: string, image: string, tittle: string, origen?: string; }


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  item;

  constructor(private afs: AngularFirestore) {
    //this.itemsCollection = this.afs.collection<Item>('items');
  }
  /**
   * Método que recupera los documentos de Firebase según el nombre de la colección
   * 
   * Uso de solo lectura
   * @param item String con el nombre de la colección
   */
  listaItem(item: string){
    this.itemsCollection = this.afs.collection<Item>(item);
    return this.itemsCollection.valueChanges();
   }

   /**
    * Método que guarda un item en la base de datos según el nombre de la colección
    * @param id Nombre de la colección
    * @param item Item a guardar
    */
  addItem(id: string, item: Item){
    this.itemsCollection = this.afs.collection<Item>(id);   
    this.itemsCollection.add({description: item.description, image: item.image, tittle: item.tittle, origen: item.origen}) 
  }

  /**
   * Método que recupera un ítem y todos sus metadatos
   * @param section Nombre de la colección
   * @param title Título del item
   */
  getItem(section,title: String){
    try{
      let ref = this.afs.collection(section,ref => ref.where("tittle","==",title));
      return ref.snapshotChanges();
    }catch(error){
      return false;
    }
  }

  getItemById(section: string, id: string){
    
    return this.afs.collection(section).doc(id).snapshotChanges();
  }


  /**
   * Actualiza campos de un item concreto
   * @param id ID item
   * @param path Nombre de la colección
   * @param data Campos a guardar
   */
  update(id,path,data){
    this.afs.collection(path).doc(id).update({description: data.description, tittle: data.tittle});
  }

  delete(id,path){
    this.afs.collection(path).doc(id).delete();
  }
/**
 * Recupera todos los items de una colección y sus metadatos
 * @param section Nombre de la colección
 */
  getAllSection(section: string){
    return this.afs.collection(section).snapshotChanges();
  }


}
