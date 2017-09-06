import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the Submitleads page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-submitleads',
  templateUrl: 'submitleads.html'
})
export class SubmitleadsPage {
  constructor(public navCtrl: NavController,public viewCtr: ViewController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.viewCtr.setBackButtonText("");
  }



}
