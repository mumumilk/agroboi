import { Component } from '@angular/core';
import { VendaPage } from '../venda/venda';
import { CompraPage } from '../compra/compra';
import { LeilaoPage } from '../leilao/leilao';
import { TrocaPage } from '../troca/troca';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CompraPage;
  tab2Root = VendaPage;
  tab3Root = LeilaoPage;
  tab4Root = TrocaPage;

  constructor() {

  }
}
