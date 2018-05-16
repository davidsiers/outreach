import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalvationPage } from '../pages/salvation/salvation';
import { BaptismPage } from '../pages/baptism/baptism';
import { SinnersPage } from '../pages/sinners/sinners';
import { PricePage } from '../pages/price/price';
import { LovesPage } from '../pages/loves/loves';
import { GiftPage } from '../pages/gift/gift';
import { PrayPage } from '../pages/pray/pray';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SalvationPage,
    BaptismPage,
    SinnersPage,
    PricePage,
    LovesPage,
    GiftPage,
    PrayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SalvationPage,
    BaptismPage,
    SinnersPage,
    PricePage,
    LovesPage,
    GiftPage,
    PrayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
