import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signUpUser (email: string, pass: string) {
        console.log('sendig data to be')
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .catch(
                error => console.log(error)
            );
    }
    singInUser (email: string, pass: string) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(
                response => {
                    console.log('signInUser method activated')
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                error => console.log(error)
            )
    }
    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }
    isAuthenticated() {
        return this.token != null;
    }
}