import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDR0GEH9qur7EXAE1Q5H8Aw_CW8GuiPYTM',
            authDomain: 'trillotest.firebaseapp.com',
            databaseURL: 'https://trillotest.firebaseio.com',
            projectId: 'trillotest',
            storageBucket: 'trillotest.appspot.com',
            messagingSenderId: '48697729465'
            });
    }
}
