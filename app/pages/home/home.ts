import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, NavParams} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {GoodsListPage} from '../commodity/goods-list/goods-list';



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


  constructor(private navCtrl: NavController , private  navParams: NavParams) {
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
