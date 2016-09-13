import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, NavParams} from 'ionic-angular';



@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  @ViewChild("myClider") slider: Slides;

  mySlideOptions = {
    initialSlide: 1,
    loop: true
  };


  constructor(private navCtrl: NavController , private  navParams: NavParams) {
  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

}
