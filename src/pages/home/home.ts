import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
//import { LoginPage } from '../login/login';
import { ChatPage } from '../chat/chat';
import { PopoverHomePage } from '../popover-home/popover-home';
import { Poll } from '../../models/pollmodel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 polls: Poll[];
 constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

 //   this.navCtrl.push(LoginPage, {
  //  });
 this.polls = [
            new Poll ('group1', ['yes', 'no']),
            new Poll ('Alice',['yes', 'no']),
            new Poll ('Bob', ['yes', 'no']),
            new Poll ('Eve', ['yes', 'no']),
            new Poll ('Chuck', ['yes', 'no']),
            new Poll ('Trent', ['yes', 'no']),
            new Poll ('Mallory', ['yes', 'no']),
	    new Poll ('group2', ['yes', 'no'])
        ];
  }

chatTapped(event, poll) {
    this.navCtrl.push(ChatPage, {
      poll: poll
    });
  }
//Show popover menu 
optionsPopover(event) {    
let popover = this.popoverCtrl.create(PopoverHomePage) 
popover.present({ ev: event }); 
} 

}
