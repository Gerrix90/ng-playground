import { Auth0Service } from './../../core/shared/services/auth0.service';
import { UserService } from 'shared/services/user.service';
import { AppUser } from 'shared/models/app-user';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ActivatedRoute } from '@angular/router';




@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string;
  email: string;
  password: string;

  constructor( 
      private userService: UserService,
      private afAuth: AngularFireAuth,
      private auth0: Auth0Service,
      private route: ActivatedRoute,
      public af: AngularFireDatabase
     ) {
    
     this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    }); 

    this.user$ = afAuth.authState;
   }

   signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch();
    console.error();
    }

   // LOGIN WITH EMAIL AND PASSWORD
 loginEmail(email: string, password: string) {
        return new Promise<any>((resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then( userData =>  resolve(userData),
          err => reject (err));
        });
      } 

      /*loginEmail() {
       
      } */

      

  login() {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl); 
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password);  
      // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());  
    }

  loginAnonymous() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);  
      this.afAuth.auth.signInAnonymously();
}
  Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
  } 

logout() {
  this.afAuth.auth.signOut();
 }

// The rxjs switchMap operator/cancell and the new observable is subscribed 
 get appUser$(): Observable<AppUser> {
    return this.user$
    .switchMap(user => {
      if (user) {
        return this.userService.get(user.uid); 
      }
       return Observable.of(null);
    });
  } 
}
