import {Component} from '@angular/core';
import {NavController,ActionSheetController,AlertController,ViewController} from 'ionic-angular';


@Component({
  templateUrl: 'search.html'
})
export class searchPage {
  constructor(private navCtrl: NavController,
  	public actionSheetCtrl:ActionSheetController,
  	public alertController:AlertController,
    public viewCtr:ViewController
  	) {

  }
  ionViewDidLoad(){
    this.viewCtr.setBackButtonText("");
  }




}
