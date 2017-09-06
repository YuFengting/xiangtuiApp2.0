import {Component} from '@angular/core';
import {NavController,ActionSheetController,AlertController,ViewController,App} from 'ionic-angular';
import {clueDetailPage} from '../clueDetail/clueDetail';

@Component({
  selector: 'saleClue',
  templateUrl: 'saleClue.html'
})
export class saleCluePage {

  public readFlag:boolean = true;
  public duingFlag:boolean = false;
  public progressItem:string = '处理中';

  constructor(private navCtrl: NavController,
  	public actionSheetCtrl:ActionSheetController,
  	public alertController:AlertController,
    public viewCtrl: ViewController,
    public app: App
  	) {
    this.viewCtrl = viewCtrl;
  }
  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
  }
  /*销售线索详情页*/
  goclueDetailPage(){
    this.app.getRootNav().push(clueDetailPage);

  }
}
