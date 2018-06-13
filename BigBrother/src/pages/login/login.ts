import { TabsPage } from './../tabs/tabs';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user = {
    email_usuario: "",
    senha_usuario: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }

  loginUser(user){
    this.userProvider.autenticarUsuario(user).then((result:any) => {
      console.log(result);
      this.navCtrl.setRoot(TabsPage);
    }).catch((error:any) => {
      console.log(error);
    })
  }

}
