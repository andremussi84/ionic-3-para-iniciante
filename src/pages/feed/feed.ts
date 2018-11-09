import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isNumber } from 'ionic-angular/umd/util/util';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
//onde fica todo o código atrelado a página
//toda variável da págona tem q ser criado aqui dentro!
//para ser vista pelo HTML ela tem q ser pública
export class FeedPage {
public nome_usuario:string ="André Mussi do código";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public SomadoisNumeros(num1:number, num2:number): void {
    var resultado:Number = 0;
    
    resultado = num1+num2;

    alert(resultado);
  }

  ionViewDidLoad() {
    //comanda o load da página.
    console.log('ionViewDidLoad FeedPage');
    //this.SomadoisNumeros(15,15);
  }

}
