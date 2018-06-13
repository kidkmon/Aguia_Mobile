import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-multa-info',
  templateUrl: 'multa-info.html',
})
export class MultaInfoPage {

  private multa:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.multa = this.navParams.get('multa');
    
  }

}
