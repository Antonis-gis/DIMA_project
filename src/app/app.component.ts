import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const firebaseConfig = {
    apiKey: "AIzaSyCkVY5E3kMJmLT3A9dL-MtpPFMKktEysyk",
    authDomain: "dima-b17a1.firebaseapp.com",
    databaseURL: "https://dima-b17a1.firebaseio.com",
    projectId: "dima-b17a1",
    storageBucket: "dima-b17a1.appspot.com",
    messagingSenderId: "656945745490"
    };
    firebase.initializeApp(firebaseConfig);

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.rootPage = HomePage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
