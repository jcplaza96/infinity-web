import { FirebaseStorageService } from './../../services/storage/firebase-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/services/firebase.service';
import { NgForm } from '@angular/forms';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { updateBinding } from '@angular/core/src/render3/instructions';

declare var $: any;


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  radio: HTMLFormElement[];
  @Input() i: Item;
  @Input() id: string;
  liked: boolean = false;
  numLikes: number = 0;
  logged: boolean = false;


  shortDescription: string = "";
  seeMore: boolean = false;
  constructor(public afAuth: AngularFireAuth, private authService: AuthService, private fbs: FirebaseStorageService, private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.getShortDescription();
    this.isLogged();
    if(this.afAuth.auth.currentUser!=null){
      this.comprobarLike();
    }
    //console.log(document.getElementsByName("rating"));

  }


  comprobarLike() {
    if (this.i.likes != undefined) {
      this.numLikes = this.i.likes.length;
      var index: number = this.i.likes.indexOf(this.afAuth.auth.currentUser.uid);
      if (index != -1) {
        this.liked = true;
      }
    } else {
      this.i.likes = [];
    }
  }

  toogleSeeMore() {
    this.seeMore = !this.seeMore;
  }

  getShortDescription() {
    let desc = this.i.description.split(" ");
    //console.log(desc);
    for (let index = 0; index < 13 && desc[index] != null; index++) {
      this.shortDescription = this.shortDescription.concat(desc[index] + " ");
    }
    if (desc.length > 13) this.shortDescription = this.shortDescription.concat("...");
  }

  contador() {
    this.liked = !this.liked;
    var btn = <HTMLButtonElement>document.getElementById(this.i.id);
    var user = this.afAuth.auth.currentUser;
    if (this.liked) {
      this.i.likes.push(user.uid);
      this.numLikes = this.i.likes.length;
    } else {
      const index: number = this.i.likes.indexOf(user.uid);
      if (index !== -1) {
        this.i.likes.splice(index, 1);
      }
      this.numLikes = this.i.likes.length;
    }
    //this.updateLikes();
  }

  isLogged() {
    this.authService.isLoggedIn().subscribe(auth => {
      if (auth) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

  ngOnDestroy() {
    this.updateLikes();
  }

  updateLikes() {
    try {
      this.afs.collection(this.id).doc(this.i.id).update({likes: this.i.likes});
    } catch (error) {
      alert("Error al actualizar la valoración: " + error);
    }
  }
}
