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
  private id_usuario:number;
  private user = {
    id: 0,
    name: "",
    email: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private multaProvider: MultasProvider) {
    this.user = this.navParams.get('user');
    console.log(this.user);
    this.getMultas();
  }

  getMultas() {
    console.log(this.user.id);
    this.multaProvider.readMultas(this.user.id).then((result: any) => {
      console.log(result);
      if(result.message != 'No multas found.'){
        this.multas = result;
      }
    }).catch((error: any) => {
      console.log(error);
    })
  }

  getMultaInfo(multa){
    this.navCtrl.push(MultaInfoPage, {'multa' : multa});
  }

}
