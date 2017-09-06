import {Component} from '@angular/core';
import {App,NavController} from 'ionic-angular';
import {searchPage} from '../find/search/search';
import {businessDetailPage} from '../find/businessdetail/businessdetail'

@Component({
  templateUrl: 'find.html'
})
export class FindPage {
  public  setHideFlag:boolean = true;
  public setHeightStyTrue:boolean = false;
  public  setSelectBoxFlag:boolean = false;
  public selectIndex;curIndex = 1;index = 0;

  constructor(private navCtrl: NavController,public app:App) {
  }
  // onPageLoaded(){
  //   this.setHideFlag = true;
  //   this.setHeightStyTrue = false;
  // }

  closeBannerImg(){
    this.setHideFlag = false;
  }
  selectOption(index){
    this.selectIndex = index;
    this.setHeightStyTrue = true;
    this.setSelectBoxFlag = true;
  }
  closeSelectOption(){
    this.selectIndex = 0;
    this.setHeightStyTrue = false;
    this.setSelectBoxFlag = false;
  }

  // 禁止事件冒泡
  stopEventPropagation(event:Event)
  {
    event.stopPropagation();
  }

  selectCurrent(index){
    this.curIndex = index;
  }

  goSearchPage(){
    this.app.getRootNav().push(searchPage);
  }

  gobusinessDetail(){
    this.app.getRootNav().push(businessDetailPage);
  }

}
