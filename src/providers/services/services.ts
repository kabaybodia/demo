import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesProvider Provider');
  }

  getAssetsData() {
  	return new Promise((resolve, reject)=>{
  		let data = [{
  		  			type: "Savings",
  		  			nameOfInvestment: "name of invs	",
  		  			amount: 403.20,
  		  			units: '£'
  		  		},
            ,
            {
              type: "P2P",
              nameOfInvestment: "some P2P envestment",
              amount: 454.20,
              units: '£'
            },
  		  		{
  		  			type: "Savings",
  		  			nameOfInvestment: "name of invs	",
  		  			amount: 403.20,
  		  			units: '£'
  		  		},
  		  		{
  		  			type: "Savings",
  		  			nameOfInvestment: "name of invs	",
  		  			amount: 403.20,
  		  			units: '£'
  		  		}];
  		setTimeout(()=>{
  			resolve(data)
  		}, 3000)
  	});
  }

}
