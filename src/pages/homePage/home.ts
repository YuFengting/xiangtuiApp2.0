import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {App} from 'ionic-angular';
import {chatDetail} from '../homePage/chatPages/chatDetail/chatDetail';
import {CluemsgPage} from '../homePage/chatPages/cluemsg/cluemsg';
import {SysmsgPage} from '../homePage/chatPages/sysmsg/sysmsg';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private app:App) {

  }

  gochatDetail(){
    this.app.getRootNav().push(chatDetail);
  }
  /*销售线索跳转*/

  gochatClue(){
    this.app.getRootNav().push(CluemsgPage);
  }
  /*系统消息跳转*/

  gochatSys(){
    this.app.getRootNav().push(SysmsgPage);
  }
}
