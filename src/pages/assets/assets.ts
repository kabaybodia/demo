import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the AssetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name: "assets",
	segment: "assets"
})
@Component({
  selector: 'page-assets',
  templateUrl: 'assets.html',
})
export class AssetsPage {

	contentButtons = "My Assets";
	assetsData;
	loadingDefault;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,	
  	private loadingCtrl: LoadingController,
  	private sProvider: ServicesProvider) {
  	this.presentLoadingDefault()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetsPage');
    this.sProvider.getAssetsData().then(data=>{
    	this.assetsData = data;
    	this.loadingDefault.dismiss();
    });
  }

  presentLoadingDefault() {
	  this.loadingDefault = this.loadingCtrl.create({
	    content: 'Please wait...'
	  });
	  this.loadingDefault.present();
	}

}
