import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2'
import { FunctionCall } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  texto = "Oi, Fulano!";
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    // this.texto = navParams.get('usuario') ? navParams.get('usuario') : 'Oi Fulano'
    var nome = navParams.get('usuario');
    if(typeof(nome) !== "undefined") {
      if(nome.length > 0) {
        this.texto = "Oi, " + nome + "!";
      } else {
        this.texto = "Oi!";
      }
    }
  }
  

  outraPagina() {
    this.navCtrl.push(Page2, {
      name:this.texto
    });
  }

}
