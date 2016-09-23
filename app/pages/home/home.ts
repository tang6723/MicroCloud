import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, NavParams} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {GoodsListPage} from '../commodity/goods-list/goods-list';
import {GoodsItemPage} from '../commodity/goods-item/goods-item';

import {AppGlobal} from '../../providers/app-global/app-global';


declare var hprose;

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

  private dataList: any = [
    {imgurl: 'img\\mt04.jpg', id: '123456', brand: '新政鸡排',    title: '[全国][官方]新政鸡排',    price: '8.9', total: 10 , tag: '多优惠+' , state: '1' },
    {imgurl: 'img\\mt05.jpg',id: '123457', brand: '矮子薯饼',    title: '八种口味，建议1-2人食用', price: '8.5', total: 11.2  , tag: '中秋优惠+' , state: '1'},
    {imgurl: 'img\\mt06.jpg',id: '123458', brand: '青田寿司',    title: '寿司四选二',              price: '19.9',total: 22 , tag: '门市价22元' , state: '0'},
    {imgurl: 'img\\mt07.jpg',id: '123459', brand: '正宗重庆小面',title: '铁东区重庆小面',          price: '8.8', total: 10 , tag: '新用户立减10元' , state: '2'},
    {imgurl: 'img\\mt04.jpg',id: '123460', brand: '老城一锅',    title: '人民公园，建议2-4人食用', price: '79',  total: 90 , tag: '新用户立减5元' , state: '2'}
  ];


  constructor(private navCtrl: NavController , private  navParams: NavParams) {
    this.appInstance=AppGlobal.getInstance();
    this.userInf=this.appInstance.currentUserInfo;
  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

  pushItem(index: string){
    this.navCtrl.push(GoodsListPage,{
      type:index
    });
  }

  buttonClick(dataItem:any){
    this.navCtrl.push(GoodsItemPage,{
      dataitem:dataItem
    });
  }

  ngAfterViewInit(){
    console.time("hprose");
    var client = hprose.Client.create("http://www.hprose.com/example/", ["hello"]);
    client.hello("World!").then(function (result) {
      //alert(result);
      console.info(result);
      console.log(result);
      console.warn(result);
      console.error(result);

    }, function (err) {
      //alert(err);
      console.error(err);
    })
    console.timeEnd("hprose");
  }

}
