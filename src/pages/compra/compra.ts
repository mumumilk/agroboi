import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { ModalController, ViewController } from 'ionic-angular';
import { OpcaoPage } from '../opcao/opcao';


/**
 * Generated class for the CompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraPage');
  }

  abrirDetalhe(){
    this.navCtrl.push(DetalhePage);
  }

  opcaoModal() {
  let opcaoModal = this.modalCtrl.create(OpcaoPage);
  opcaoModal.present();
  }
}
