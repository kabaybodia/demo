import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SpendingPage } from '../spending/spending';
import { AssetsPage } from '../assets/assets';
import { PaymentPage } from '../payment/payment';

@IonicPage({
  segment: 't'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
	activeTab: any = 0;
  tab1Root = HomePage;
  tab2Root = SpendingPage;
  tab3Root = AssetsPage;
  tab4Root = PaymentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLeave() {

  }
}
