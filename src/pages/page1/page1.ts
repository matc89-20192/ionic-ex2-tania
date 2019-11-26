import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2'

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let nome = navParams.get('usuario');
  }

  outraPagina() {
    this.navCtrl.push(Page2, {});
  }

}
