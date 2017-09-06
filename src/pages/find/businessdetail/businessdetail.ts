import {Component} from '@angular/core';
import {NavController,ActionSheetController,AlertController,ViewController} from 'ionic-angular';
import {App} from 'ionic-angular';
import {evaluatePage} from '../../find/evaluate/evaluate';
import {productdetailPage} from '../../find/productdetail/productdetail';

@Component({
  templateUrl: 'businessdetail.html'
})
export class businessDetailPage {
  constructor(private navCtrl: NavController,
  	public actionSheetCtrl:ActionSheetController,
  	public alertController:AlertController,
    public viewCtr:ViewController,
    public app:App
  	) {

  }
  ionViewDidLoad(){
    this.viewCtr.setBackButtonText("");
  }

  goEvalutePage(){
    this.app.getRootNav().push(evaluatePage);
  }

  goProductDetail(){
    this.app.getRootNav().push(productdetailPage);
  }


}
