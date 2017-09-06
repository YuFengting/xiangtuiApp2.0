import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';


@Component({
  templateUrl: 'productdetail.html'
})
export class productdetailPage {
  constructor(public viewCtr:ViewController) {

  }
  ionViewDidLoad(){
    this.viewCtr.setBackButtonText("");
  }




}
