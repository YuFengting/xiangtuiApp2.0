import { Component } from '@angular/core';

import { HomePage } from '../homePage/home';
import { BusinessPage } from '../business/business';
import { FindPage } from '../find/find';
import {UserCenterPage} from "../userCenter/userCenter";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = BusinessPage;
  tab3Root: any = FindPage;
  tab4Root: any = UserCenterPage;

  constructor() {

  }
}
