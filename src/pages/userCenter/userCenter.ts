import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import {billListPage} from './billList/billList';
import {perInfoPage} from './perInfo/perInfo';
import {saleCluePage} from './saleClue/saleClue';


@Component({
  selector: 'myCenter',
  templateUrl: 'userCenter.html'
})
export class UserCenterPage {
  constructor(public navCtrl: NavController,
              private app:App) {
  }
  /*跳转账单页面*/
  gobillPage(){
    // this.navCtrl.push(billListPage);
    this.app.getRootNav().push(billListPage)
  }
  /*填写个人信息页面*/
  gosetInfoPage() {
    this.app.getRootNav().push(perInfoPage);
  }
  /*销售线索列表页*/
  gosaleCluePage(){
    this.app.getRootNav().push(saleCluePage);
  }

}
