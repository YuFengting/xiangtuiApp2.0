import {Component,ViewChild } from '@angular/core';
import {NavController,ActionSheetController,AlertController,ViewController,App,Content } from 'ionic-angular';
import { SubmitleadsPage } from '../../chatPages/submitleads/submitleads';

@Component({
  selector:'chatDetail',
  templateUrl: 'chatDetail.html'
})
export class chatDetail {
  @ViewChild(Content) content: Content;
  public isInput:boolean = true;
  public showEmoji:boolean = false;

  constructor(private navCtrl: NavController,
              public actionSheetCtrl:ActionSheetController,
              public alertController:AlertController,
              public viewCtrl: ViewController,
              public app: App
  ) {
    this.viewCtrl = viewCtrl;
  }

  changeInput(){
    this.isInput = !this.isInput;

}

  scrollToBot(){
    this.content.scrollToBottom(300);
  }
  changeEmoji(){
    this.showEmoji = !this.showEmoji;
    this.content.resize();
    let a = this;/*直接用this报错*/
    setTimeout(function(){
      a.content.scrollToBottom(30);
    },200)
  }
  closeEmoji(){
    this.showEmoji = false;
    this.content.resize();
    let a = this;/*直接用this报错*/
    setTimeout(function(){
      a.content.scrollToBottom(30);
    },200)
  }
  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
  }
  ionViewDidEnter(){ //page进入后
    this.content.scrollToBottom(300)
  }

  goSubmitLeads(){
    this.app.getRootNav().push(SubmitleadsPage);
  }

}
