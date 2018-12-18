import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCq9Dfy-UCSaOp-FYy7chmDTE4TgtlKOGM",
      authDomain: "ng-recipe-book-3db1c.firebaseapp.com"
    });
  }
}
