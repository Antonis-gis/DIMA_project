import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular'; 
import { LoginPage } from '../login/login';
import firebase from 'firebase';

/**
 * Generated class for the PopoverHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover-home',
  templateUrl: 'popover-home.html',
})
export class PopoverHomePage {

  constructor (public viewCtrl: ViewController, public navCtrl: NavController) { } 
backup() {       
   } 
   
logout() { 
firebase.auth().signOut().then(function() {
  // Sign-out successful.
this.navCtrl.setRoot(LoginPage);
this.navCtrl.popToRoot();
//this.navCtrl.push(LoginPage, {
 //   });
}).catch(function(error) {
  // An error happened.
});      
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverHomePage');
  }

}
