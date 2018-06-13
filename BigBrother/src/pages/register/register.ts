import { TabsPage } from './../tabs/tabs';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public user = {
    nome_usuario: "",
    cpf_usuario: "",
    email_usuario: "",
    senha_usuario: "",
    permissao_usuario: 2
  };

  private confirmarSenha: string = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }

  createUser(user){
    this.userProvider.criarUsuario(user).then((result:any) =>{
      console.log(result);
      this.navCtrl.setRoot(TabsPage);
    }).catch((error: any)=>{
      console.log(error);
    })
  }

}
