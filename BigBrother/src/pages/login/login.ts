import { TabsPage } from './../tabs/tabs';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from './../register/register';

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

  public userInfo = {
    nome: "",
    email:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private alertCtrl: AlertController) {
    this.userInfo.nome = this.navParams.get('nome_usuario');
    this.userInfo.email = this.navParams.get('email_usuario');
    console.log(this.userInfo);
  }

  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: msg.title,
      subTitle: msg.subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser(user){
    if(user.email_usuario != '' && user.senha_usuario != ''){
      this.userProvider.autenticarUsuario(user).then((result:any) => {
        console.log(result);
        this.navCtrl.setRoot(TabsPage,{'id_usuario': result._body, 'nome': this.userInfo.nome, 'email': this.userInfo.email });
      }).catch((error:any) => {
        console.log(error);
      });
    }
    else{
      let msg = {
        title: 'Erro',
        subTitle: 'Por favor preencha todos os campos corretamente.'
      }
      this.user.senha_usuario = "";
      this.showAlert(msg);
    }
    
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage, {'email_usuario': this.user.email_usuario});
  }

}
