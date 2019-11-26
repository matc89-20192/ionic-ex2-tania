import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Page2} from '../page2/page2'

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  page2 = Page2;
  constructor(public navCtrl: NavController) {

  }

  outraPagina() {
    // console.log("Indo para outra página")
  }

}
