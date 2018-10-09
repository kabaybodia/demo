import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPageModule } from '../pages/tabs/tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { SpendingPageModule } from '../pages/spending/spending.module';
import { AssetsPageModule } from '../pages/assets/assets.module';
import { PaymentPageModule } from '../pages/payment/payment.module';
import { ServicesProvider } from '../providers/services/services';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    TabsPageModule,
    HomePageModule,
    SpendingPageModule,
    AssetsPageModule,
    PaymentPageModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider
  ]
})
export class AppModule {}
