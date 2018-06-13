import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { MultaPage } from '../multa/multa';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  userInfo = {
    id: 0,
    nome: "",
    email: ""
  };

  tab1Root = HomePage;
  tab2Root = MultaPage;
  tab3Root = ProfilePage;
  id_usuario = { 
    user: this.userInfo
  };
 
  

  constructor(public navParams: NavParams) {
    let id_usuario = this.navParams.get('id_usuario');
    this.userInfo.nome = this.navParams.get('nome');
    this.userInfo.email = this.navParams.get('email');
    this.userInfo.id = parseInt(id_usuario);
    console.log(this.userInfo.id);
    console.log(this.userInfo);
  }

}
