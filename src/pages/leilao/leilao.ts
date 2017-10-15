import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { OpcaoLeilaoPage } from '../opcao-leilao/opcao-leilao';
/**
 * Generated class for the LeilaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leilao',
  templateUrl: 'leilao.html',
})
export class LeilaoPage {
tipo : string = 'acontecendo';
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.tipo =  'acontecendo'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeilaoPage');
  }

  opcoesModal() {
  let opcaoModal = this.modalCtrl.create(OpcaoLeilaoPage);
  opcaoModal.present();
  }



}
