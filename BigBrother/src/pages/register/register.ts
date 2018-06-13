import { LoginPage } from './../login/login';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


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


  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private alertCtrl: AlertController) { 
    this.user.email_usuario = this.navParams.get('email_usuario');
  }


  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: msg.title,
      subTitle: msg.subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  createUser(user) {
    if (this.confirmarSenha == user.senha_usuario && user.nome_usuario != '' && user.email_usuario != '' && user.senha_usuario != '' && user.cpf_usuario != '') {
      this.userProvider.criarUsuario(user).then((result: any) => {
        console.log(result);

        let msg = {
          title: 'Sucesso',
          subTitle: 'A conta foi cadastrada com sucesso no sistema.'
        }

        this.showAlert(msg);
        this.navCtrl.setRoot(LoginPage, {'nome_usuario': user.nome_usuario, 'email_usuario': user.email_usuario});
      }).catch((error: any) => {
        console.log(error);
      });
    }
    else {
      let msg = {
        title: 'Erro',
        subTitle: 'Por favor preencha todos os campos corretamente.'
      }
      this.user.senha_usuario = "";
      this.confirmarSenha = "";
      this.showAlert(msg);
    }

  }

}
