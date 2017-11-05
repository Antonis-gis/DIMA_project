import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
//import { LoginPage } from '../login/login';
import { ChatPage } from '../chat/chat';
import { PopoverHomePage } from '../popover-home/popover-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 chats: any;
 constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

 //   this.navCtrl.push(LoginPage, {
  //  });
 this.chats = [
            'group1',
            'Alice',
            'Bob',
            'Eve',
            'Chuck',
            'Trent',
            'Mallory',
	    'group2'
        ];
  }

chatTapped(event, chat) {
    this.navCtrl.push(ChatPage, {
      chat: chat
    });
  }
//Show popover menu 
optionsPopover(event) {    
let popover = this.popoverCtrl.create(PopoverHomePage) 
popover.present({ ev: event }); 
} 

}
