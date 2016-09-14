import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

/*
  Generated class for the GoodsListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/commodity/goods-list/goods-list.html',
})
export class GoodsListPage {

  public typeParam:any;

  constructor(private navCtrl: NavController ,params: NavParams) {
    this.typeParam=params.get("type");

  }

}
