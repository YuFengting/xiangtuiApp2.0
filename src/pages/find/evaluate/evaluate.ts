import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';


@Component({
  templateUrl: 'evaluate.html'
})
export class evaluatePage {
  constructor(public viewCtr:ViewController) {

  }
  ionViewDidLoad(){
    this.viewCtr.setBackButtonText("");
  }




}
