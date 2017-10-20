import { Component } from '@angular/core';
import { VendaPage } from '../venda/venda';
import { CompraPage } from '../compra/compra';
import { LeilaoPage } from '../leilao/leilao';
import { TrocaPage } from '../troca/troca';
import { HomePage } from '../home/home';
import { IonicPage } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';
import { NavController } from 'ionic-angular';

@IonicPage()

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CompraPage;
  tab2Root = VendaPage;
  tab3Root = LeilaoPage;
  tab4Root = TrocaPage;

  constructor(public navCtrl: NavController, public firebase: FirebaseProvider) {

  }

  sair(){
  this.firebase.auth().signOut().then(() => this.navCtrl.setRoot(HomePage));
}
}
