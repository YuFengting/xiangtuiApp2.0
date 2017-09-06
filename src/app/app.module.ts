import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BusinessPage } from '../pages/business/business';
import { FindPage } from '../pages/find/find';
import { HomePage } from '../pages/homePage/home';
import { TabsPage } from '../pages/tabs/tabs';
import {searchPage} from '../pages/find/search/search';   /*搜索页面*/
import {businessDetailPage} from '../pages/find/businessdetail/businessdetail'; /*商家详情*/
import {productdetailPage} from '../pages/find/productdetail/productdetail';  /*产品详情*/
import {evaluatePage} from  '../pages/find/evaluate/evaluate';  /*撰写评论*/
import { UserCenterPage } from '../pages/userCenter/userCenter';/*个人中心*/
import { billListPage } from '../pages/userCenter/billList/billList';/*账单页面*/
import { clueDetailPage } from '../pages/userCenter/clueDetail/clueDetail';/*销售线索进度详情*/
import { saleCluePage } from '../pages/userCenter/saleClue/saleClue';/*销售线索列表页*/
import { perInfoPage } from '../pages/userCenter/perInfo/perInfo';/*设置个人信息*/

import { chatDetail } from '../pages/homePage/chatPages/chatDetail/chatDetail';/*聊天消息*/
import { CluemsgPage } from '../pages/homePage/chatPages/cluemsg/cluemsg';/*销售线索消息*/
import { SysmsgPage } from '../pages/homePage/chatPages/sysmsg/sysmsg';/*系统消息*/

import { SubmitleadsPage } from '../pages/homePage/chatPages/submitleads/submitleads'; /*提交销售线索*/

@NgModule({
  declarations: [
    MyApp,
    BusinessPage,
    FindPage,
    HomePage,
    TabsPage,
    UserCenterPage,
    searchPage,
    businessDetailPage,
    productdetailPage,
    evaluatePage,
    UserCenterPage,/*个人中心页面*/
    billListPage,/*账单页面*/
    clueDetailPage,/*线索进度详情页*/
    perInfoPage,/*设置个人信息页*/
    saleCluePage,/*销售线索列表页*/
    chatDetail,/*聊天详情页*/
    CluemsgPage,/*销售线索消息*/
    SysmsgPage,/*系统消息*/
    SubmitleadsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BusinessPage,
    FindPage,
    HomePage,
    TabsPage,
    UserCenterPage,
    searchPage,
    businessDetailPage,
    productdetailPage,
    evaluatePage,
    UserCenterPage,/*个人中心页面*/
    billListPage,/*账单页面*/
    clueDetailPage,/*线索进度详情页*/
    perInfoPage,/*设置个人信息页*/
    saleCluePage,/*销售线索列表页*/
    chatDetail,/*聊天详情页*/
    CluemsgPage,/*销售线索消息*/
    SysmsgPage,/*系统消息*/
    SubmitleadsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
