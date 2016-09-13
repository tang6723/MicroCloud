import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, NavParams} from 'ionic-angular';



@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  @ViewChild("mySlider") slider: Slides;

  mySlideOptions = {
    initialSlide: 1,
    loop: true
  };


  constructor(private navCtrl: NavController , private  navParams: NavParams) {
  }

  gotoSlider(i: number){
    this.slider.slideTo(i, 300);
  }

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    //this.mySlideOptions.loop=true;
    //console.log("Current index is", currentIndex);
  }

  ionViewDidEnter(){
    let currentIndex = this.slider.getActiveIndex();
    console.log("Current index is", currentIndex);
  }

}
