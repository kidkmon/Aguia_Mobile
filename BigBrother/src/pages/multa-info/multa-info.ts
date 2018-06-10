import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MultasProvider } from '../../providers/multas/multas';

/**
 * Generated class for the MultaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multa-info',
  templateUrl: 'multa-info.html',
})
export class MultaInfoPage {

  private multa:any ;
  private multa_img: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private multaProvider: MultasProvider) {
    
    this.multa = this.navParams.get('multa');
    
  }

}
