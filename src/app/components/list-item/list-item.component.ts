import { FirebaseStorageService } from './../../services/storage/firebase-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/services/firebase.service';
import { NgForm } from '@angular/forms';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

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
    if (this.i.likes != undefined) {
      this.numLikes = this.i.likes.length;
    }
    this.getShortDescription();
    this.isLogged();
    //console.log(document.getElementsByName("rating"));
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
      btn.classList.add("coloredLike");
      this.i.likes.push(user.uid);
    } else {
      btn.classList.remove("coloredLike");
      const index: number = this.i.likes.indexOf(user.uid);
      if (index !== -1) {
        this.i.likes.splice(index, 1);
      }
    }
    this.updateLikes();
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

  updateLikes() {
    try {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`${this.id}/${this.i.id}`);
      userRef.set(this.i, { merge: true });
      alert("Usuario actualizado correctamente");
    } catch (error) {
      alert("Error al actualizar el usuario: " + error);
    }
  }
}
