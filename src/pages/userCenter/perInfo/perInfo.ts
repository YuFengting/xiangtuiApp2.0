import {Component} from '@angular/core';
import {NavController,ActionSheetController,AlertController,ViewController} from 'ionic-angular';


@Component({
  selector: 'perInfo',
  templateUrl: 'perInfo.html'
})
export class perInfoPage {
  constructor(private navCtrl: NavController,
  	public actionSheetCtrl:ActionSheetController,
  	public alertController:AlertController,
    public viewCtrl: ViewController
  	) {
    this.viewCtrl = viewCtrl;
  }

  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
  }

}
