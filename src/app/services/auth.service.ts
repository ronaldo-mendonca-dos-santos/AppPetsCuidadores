import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, senha: string) {
    return this.afAuth.signInWithEmailAndPassword(email, senha);
  }

  register(email: string, senha: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, senha);
  }

  logout() {
    return this.afAuth.signOut();
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }
}
