import { MultaInfoPage } from './../multa-info/multa-info';
import { MultasProvider } from './../../providers/multas/multas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private multas: Array<{}>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private multaProvider: MultasProvider) {
    this.getMultas();
  }

  getMultas() {
    this.multaProvider.readMultas(3).then((result: any) => {
      console.log(result);
      this.multas = result;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  getMultaInfo(multa){
    this.navCtrl.push(MultaInfoPage, {'multa' : multa});
  }

}
