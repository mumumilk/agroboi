import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompraPage } from '../pages/compra/compra';
import { VendaPage } from '../pages/venda/venda';
import { LeilaoPage } from '../pages/leilao/leilao';
import { TrocaPage } from '../pages/troca/troca';
import { HomePage } from '../pages/home/home';
import { DetalhePage } from '../pages/detalhe/detalhe';

import { OpcaoPage } from '../pages/opcao/opcao';
import { DetalheRacaPage } from '../pages/detalhe-raca/detalhe-raca';
import { DetalheLeitePage } from '../pages/detalhe-leite/detalhe-leite';
import { DetalheCortePage } from '../pages/detalhe-corte/detalhe-corte';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CompraPage,
    HomePage,
    OpcaoPage,
    VendaPage,
    LeilaoPage,
    TrocaPage,
    DetalhePage,
    DetalheRacaPage,
    DetalheLeitePage,
    DetalheCortePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FlexLayoutModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CompraPage,
    HomePage,
    OpcaoPage,
    VendaPage,
    LeilaoPage,
    TrocaPage,
    TabsPage,
    DetalhePage,
    DetalheRacaPage,
    DetalheLeitePage,
    DetalheCortePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
