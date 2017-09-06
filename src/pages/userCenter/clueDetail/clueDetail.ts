import {Component} from '@angular/core';
import {NavController,ActionSheetController,AlertController,ViewController} from 'ionic-angular';


@Component({
  selector:'clueDetail',
  templateUrl: 'clueDetail.html'
})
export class clueDetailPage {
  public stateListHeight:string = '100px';
  public stateListState:number = 3;

  constructor(private navCtrl: NavController,
  	public actionSheetCtrl:ActionSheetController,
  	public alertController:AlertController,
    public viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }
  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
    if(this.stateListState==1){
      this.stateListHeight='100px'
    }else if(this.stateListState==2){
      this.stateListHeight='224px'
    }else if(this.stateListState==3){
      this.stateListHeight='355px'
    }else if(this.stateListState==4){
      this.stateListHeight='412px'
    }
  }



}
