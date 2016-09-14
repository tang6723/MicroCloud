import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, NavParams} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {GoodsListPage} from '../commodity/goods-list/goods-list';
import {AppGlobal} from '../../providers/app-global/app-global'



@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  @ViewChild("mySlider") slider: Slides;

  mySlideOptions = {
    initialSlide: 1,
    pager: true,
    loop: true
  };

  typeTmp: string;
  appInstance:AppGlobal;
  userInf:string;


  constructor(private navCtrl: NavController , private  navParams: NavParams) {
    this.appInstance=AppGlobal.getInstance();
    this.userInf=this.appInstance.currentUserInfo;
  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

  pushItem(index: string){
    /*switch (index) {
      case 1:
        this.typeTmp = '审批';
        break;
      case 2:
        this.typeTmp = '付款';
        break;
      case 3:
        this.typeTmp = '发票';
        break;
      case 4:
        this.typeTmp = '验收';
        break;
      case 5:
        this.typeTmp = '入库';
        break;
    }*/

    this.navCtrl.push(GoodsListPage,{
      type:index
    });
  }

}
