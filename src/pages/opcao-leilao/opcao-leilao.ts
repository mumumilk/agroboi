import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpcaoLeilaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opcao-leilao',
  templateUrl: 'opcao-leilao.html',
})
export class OpcaoLeilaoPage {
  public testCheckboxResultRaca;
  public testCheckboxResultSangue;
  public testCheckboxResultCategoria;
  public testCheckboxOpen;
  public structure: any = { lower: 1000, upper: 10000 };
  public structureIdade: any = { lower: 18, upper: 30 };
  public event = {
    Inicio: '2017-10-15',
    Fim: '2017-10-30',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcaoLeilaoPage');
  }



}
