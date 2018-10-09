import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SpendingPage } from '../spending/spending';
import { AssetsPage } from '../assets/assets';
import { PaymentPage } from '../payment/payment';

@IonicPage({
	name: "",
	segment: ""
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
	
  tab1Root = HomePage;
  tab2Root = SpendingPage;
  tab3Root = AssetsPage;
  tab4Root = PaymentPage;

  constructor() {

  }
}
