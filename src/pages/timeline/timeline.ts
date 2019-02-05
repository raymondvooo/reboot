import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TimelineComponent} from '../../components/timeline/timeline';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

  toggleSection(number){
    var x = document.getElementById(number);
    if( x.style.display === "initial" ){
      x.style.display = "none";
    } else if ( x.style.display === "none" ){
      x.style.display = "initial";
    }
  }


}
