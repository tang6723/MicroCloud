import {Component} from '@angular/core';
//import {NavController} from 'ionic-angular';
import {NavController, Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  mySlideOptions = {
    autoplay:2000,
    //direction:'vertical',
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
