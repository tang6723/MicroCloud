import { Component } from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';

/*
  Generated class for the AutoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/auto/auto.html',
})
export class AutoPage {
  mySlideOptions = {
    autoplay:2000,
    direction:'vertical',
    pager:true,
    initialSlide: 1,
    loop: true
  };

  @ViewChild('mySlider') slider: Slides;

  constructor(private navCtrl: NavController) {

  }

  click() {
    //this.slider.sliderNext(true, 250);
    //this.slider.slideNext(300,1,true,);
    this.slider.slideTo(2, 500);
  }

}
