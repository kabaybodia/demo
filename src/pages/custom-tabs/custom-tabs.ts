import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: "/:bottomSegmentButtons"
})
@Component({
  selector: 'page-custom-tabs',
  templateUrl: 'custom-tabs.html',
})
export class CustomTabsPage {

	private bottomSegmentButtons:string = 'Assets';
	private activePage:any;
	private pages: any = {
		"Home": {
							title: "Home"

						},
		"Spending": {
							title: "Spending"

						},
		"Assets": {
							title: "Assets"

						},
		"Payment": {
							title: "Payment"

						}
	};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.activePage = this.pages["Home"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomTabsPage');
    this.activePage = this.pages[this.bottomSegmentButtons];

  }

  selectedBottomSegment(segmentValue: string) {
  	this.activePage = this.pages[segmentValue];
  }

}
