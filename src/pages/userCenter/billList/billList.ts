/**
 * Created by Administrator on 2017/2/20.
 */
import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({

  selector:'billList',
  templateUrl: 'billList.html'
})
export class billListPage {
  constructor(private navCtrl: NavController,
                public viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;

  }

  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
  }


}
