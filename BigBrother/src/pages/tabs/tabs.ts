import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { MultaPage } from '../multa/multa';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MultaPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
