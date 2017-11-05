import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPageModule } from '../pages/login/login.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { PopoverHomePage } from '../pages/popover-home/popover-home';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


var config = {
  apiKey: "AIzaSyCkVY5E3kMJmLT3A9dL-MtpPFMKktEysyk",
  authDomain: "dima-b17a1.firebaseapp.com",
  databaseURL: "https://dima-b17a1.firebaseio.com",
  projectId: "dima-b17a1",
  storageBucket: "dima-b17a1.appspot.com",
  messagingSenderId: "656945745490"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ChatPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ChatPage,
    PopoverHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
