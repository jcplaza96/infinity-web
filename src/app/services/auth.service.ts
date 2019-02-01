import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router, private afs: AngularFirestore) {

  }

  loginEmailUser(email:string, password:string) {
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData=>resolve(userData),
      err=>reject(err));
    });
  }

  registerUser(email:string, password:string) { 
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData=>{
        resolve(userData),
        this.updateUserData(userData.user)
      }).catch(err => console.log(reject(err)))
    });
  }

  loginGoogleUser() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((credential) =>{
        this.updateUserData(credential.user)
      })
  }

  logoutUser() { 
    this.router.navigate(['/']);
    return this.afAuth.auth.signOut();
  }

  isLoggedIn(){
    return this.afAuth.authState.pipe(map(auth=>auth));
  }

  getCurrentUser(){
    return this.afAuth.auth.currentUser;
  }

  isUserAdmin(userUid){
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }

  private updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email, 
      roles:{
        reader:true,
        admin:false,
        editor:false
      }
    }
    return userRef.set(data, {merge:true})
  }


  // user: User;

  // constructor(public afAuth: AngularFireAuth, public router: Router) {
  //   this.afAuth.authState.subscribe(user => {
  //     if (user) {
  //       this.user = user;
  //       localStorage.setItem('user', JSON.stringify(this.user));
  //     } else {
  //       localStorage.setItem('user', null);
  //     }
  //   })
  // }


  // async  login(email: string, password: string) {

  //   try {
  //     await this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     this.router.navigate(['/']);
  //     console.log(this.user);
  //   } catch (e) {
  //     alert("Error!" + e.message);
  //   }
  // }

  // async logout() {
  //   await this.afAuth.auth.signOut();
  //   localStorage.removeItem('user');
  //   this.router.navigate(['admin/login']);
  // }

  // get isLoggedIn() {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user !== null;
  // }


}
