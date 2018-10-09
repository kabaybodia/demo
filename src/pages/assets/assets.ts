import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the AssetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assets',
  templateUrl: 'assets.html',
})
export class AssetsPage {

	contentButtons = "My Assets";
	typeOfInvestmentButtons: string = "All";
	assetsData;
	private filteredAssetsData: any;
	loadingDefault;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,	
  	private loadingCtrl: LoadingController,
  	private sProvider: ServicesProvider) {
  	this.presentLoadingDefault()
  }

  ionViewDidLoad() {
    this.sProvider.getAssetsData().then(data=>{
    	this.assetsData = data;
    	this.filteredAssetsData = this.assetsData.filter(e=>e.type===this.typeOfInvestmentButtons || this.typeOfInvestmentButtons  === "All");
    	this.loadingDefault.dismiss();
    });
  }

  presentLoadingDefault() {
	  this.loadingDefault = this.loadingCtrl.create({
	    content: 'Please wait...'
	  });
	  this.loadingDefault.present();
	}

	assetsSegmentChanged(event) {
		// console.log(event)
	}

	typeOfInvestmentSegmentChanged(event) {
		console.log(event);
		this.filteredAssetsData = this.assetsData.filter(e=>e.type===event.value || event.value === "All");
	}

}
